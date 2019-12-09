import React, { useState, useEffect } from 'react';
import '../../../src/template/index.sass'
import Landing from '../Landing'
import Register from '../Register'
import Login from '../Login'
import BoardAdmin from '../BoardAdmin'
import BoardClient from '../BoardClient'
import CreateTeam from '../CreateTeam'
import TeamList from '../TeamList'
import AddLesson from '../AddLesson'
import LessonList from '../LessonList'
import Feedback from '../Feedback'
import BookLesson from '../BookLesson'


import { Route, withRouter, Redirect } from 'react-router-dom'
import { authenticateUser, registerUser, retrieveUser, retrieveTeams, retrieveLessons, createTeam, addLesson, deleteLesson  } from '../../logic'

export default withRouter(function ({ history }) {
    const [name, setName] = useState()
    const [user, setUser] = useState()
    const [teams, setTeams] = useState([])
    const [lessons, setLessons] = useState([])
    //const [users, setUsers] = useState()
    //const [role, setRole] = useState()

    useEffect(() => {
        const { token } = sessionStorage;

        (async () => {
            if (token) {
                const { name: _name, username } = await retrieveUser(token)

                setName(_name)

                setUser(username)

            //  COMO REDIRECCIONAR DE BOARDCLIENT O BOARDADMIN EN FUNCION DE SI ROLE 'admin' o ROLE 'client'

                //await retrieveTeams(token)

                const teams = await retrieveTeams(token)

                setTeams(teams)

                const lessons = await retrieveLessons(token)

                setLessons(lessons)
            }

        })()

    }, [sessionStorage.token, lessons])


    async function listTeams(token) {
        const teams = await retrieveTeams(token)

        setTeams(teams)

    }

    async function listLessons(token) {
        const lessons = await retrieveLessons(token)

        setLessons(lessons)

    }


    function handleGoToLogin() { history.push('/login')}
    
    function handleGoToRegister() { history.push('/register')}

    async function handleRegister(name, surname, email, username, password) {

        try {
            await registerUser(name, surname, email, username, password )

            history.push('/login')

        } catch (error) {
            console.error(error)
        }
    }

    async function handleLogin(username, password) {
        try {
            const token = await authenticateUser(username, password)

            sessionStorage.token = token


            //  COMO REDIRECCIONAR DE BOARDCLIENT O BOARDADMIN EN FUNCION DE SI ROLE 'admin' o ROLE 'client'

            const user = await retrieveUser(token)
            sessionStorage.role = user.role
            setUser(user)


            user && (user.role === 'admin') && history.push('/board-admin')

            user && (user.role === 'client') && history.push('/board-client')



           //history.push('/board')
     
        } catch (error) {
            console.error(error)
        }
    }



    function handleGoToLessonList() { history.push('/lessonlist'); setLessons(lessons) 

}

    function handleGoToTeamList() { history.push('/teamlist'); setTeams(teams)
    }


    async function handleAddLesson(date, timeStart, timeEnd, teamId) {
        try {  
            const token = sessionStorage.token
    
            await addLesson(token, date, timeStart, timeEnd, teamId)
    
            await listLessons(token)

            history.push('/lessonlist')

        } catch (error) {
            console.error(error)
        }

        //history.push('/add-lesson')
        //setLessons(lessons)
    }


    async function handleCreateTeam(teamName, teamEmail, teamPhone, teamActivity) {
        try {

            const token = sessionStorage.token

            await createTeam(token, teamName, teamEmail, teamPhone, teamActivity)

            await listTeams(token)

            history.push('/teamlist')

        } catch (error) {
            console.error(error)
        }

        //history.push('/create-team')
        //setTeams(teams) 
    }

    async function handleDeleteLesson(id) {
        try {

            const  token  = sessionStorage.token
            
            
            await deleteLesson(token, id)
            //history.push('/lessonlist?timestamp=${Date.now()}')
            
            history.push('/lessonlist')
            
            const lessons = await retrieveLessons(token)
            
            setLessons(lessons)
            
            //setTeams(teams)
            


        } catch (error) {
            console.error(error)
        }
    }


    function handleGoBack() { 
        
      /*   setUser(user)
        
        const role = user.role  

        role === 'client' ? history.push('/board-client') : history.push('/board-admin')
        
        */
       
       history.push('/')
    }
 
    function handleLogout() {
        sessionStorage.clear()

        handleGoBack()
    }



    function handleBookLesson() { 
        
        
        
        history.push('/book-lesson')
    }
    





    const { token, role } = sessionStorage

    return <>
        <Route exact path='/' render={() => token ? <Redirect to='/' /> : <Landing onRegister={handleGoToRegister} onLogin={handleGoToLogin} />} />
        <Route path='/register' render={() => token ? <Redirect to='/board-client' /> : <Register onRegister={handleRegister} onBack={handleGoBack} />} />
        <Route path='/login' render={() => token ? <Redirect to='/login' /> : <Login onLogin={handleLogin} onBack={handleGoBack} />} />
        
        <Route path='/board-admin' render={() => token && role === 'admin' ? <BoardAdmin user={name} onTeamList={handleGoToTeamList} onLessonList={handleGoToLessonList} onBack={handleGoBack} onLogout={handleLogout}/> : <Redirect to='/board-client' /> } />
        <Route path='/lessonlist' render={() => token && role === 'admin' ? <LessonList user={name} /* user={user} */ lessons={lessons} onDeleteLesson={handleDeleteLesson} onBack={handleGoBack}/> : <Redirect to='/board-client' />} />
        <Route path='/teamlist' render={() => token && role === 'admin' ? <TeamList user={name} teams={teams} onCreateTeam={handleCreateTeam} onBack={handleGoBack}/> : <Redirect to='/board-client' />} />
        <Route path='/create-team' render={() => token && role === 'admin' ? <CreateTeam user={name} teams={teams} onCreateTeam={handleCreateTeam}/> : <Redirect to='/board-client' /> } />
        <Route path='/add-lesson' render={() => token && role === 'admin' ? <AddLesson user={name} teams={teams} lessons={lessons} onAddLesson={handleAddLesson} /> : <Redirect to='/board-client' /> } />
        
        <Route path='/board-client' render={() => token /* && user.role === 'client' *//* I ES CLIENT */ ? <BoardClient user={name} onBookLesson={handleBookLesson} onLessonList={handleGoToLessonList} onLogout={handleLogout} /> : <Redirect to='/' />} />
        <Route path='/book-lesson' render={() => token ? <BookLesson user={name} onBookLessons={handleBookLesson} /> : <Redirect to='/' />  }/>

        <Route path='/logout' render={() => /* token && user.role === 'client'  *//* ? <BookLesson user={name} /> : */ <Redirect to='/' />  }/>
    </>
})
