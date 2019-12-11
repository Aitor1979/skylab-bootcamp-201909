require('dotenv').config()
const { env: { DB_URL_TEST } } = process
const { expect } = require('chai')
const retrieveLessons = require('.')
const { random } = Math
const { database, ObjectId, models: { User, Lesson, Team } } = require('pyrene-ski-data')

describe('logic - retrieve lessons', () => {
    before(() => database.connect(DB_URL_TEST))

    let id, name, surname, email, username, password, role = "admin", lessonIds, dates, timeStarts, timeEnds, teamNames, teamActivities, teamId

    beforeEach(async () => { debugger
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        username = `username-${random()}`
        password = `password-${random()}`
        role = "admin"

        await Promise.all([User.deleteMany(), Lesson.deleteMany()])

        const user = await User.create({ name, surname, email, username, password, role })

        userId = user.id
        teamName = `teamName-${random()}`
        teamEmail = `teamMail-${random()}@mail.com`
        teamPhone = `teamPhone-${random()}`
        teamActivity = `teamActivity-${random()}`

        const team = await Team.create({user: userId, teamName, teamEmail, teamPhone, teamActivity})

        team_Id = team.id
        teamName = team.teamName
        teamActivity = team.teamActivity

        lessonIds = []
        dates = []
        timeStarts = []
        timeEnds = []
        teamIds = []
        // teamNames = []
        // teamActivities = []
 
        const insertions = []

        for (let i = 0; i < 10; i++) {
            const lesson = {
                user: id,
                date: `date-${random()}`,
                timeStart: `timeStart-${random()}`,
                timeEnd: `timeEnd-${random()}`,
                teamId: team_Id
                // teamName : `team-${random()}`,
                // teamActivity: `activity-${random()}`
            }

            insertions.push(Lesson.create(lesson).then(lesson => lessonIds.push(lesson.id)))

            
            dates.push(lesson.date)
            timeStarts.push(lesson.timeStart)
            timeEnds.push(lesson.timeEnd)
            teamIds.push(lesson.teamId)
            // teamNames.push(lesson.teamName)
            // teamActivities.push(lesson.teamActivity)

        }

        for (let i = 0; i < 10; i++)
            insertions.push(Lesson.create({
                user: ObjectId(),
                date: `date-${random()}`,
                timeStart: `timeStart-${random()}`,
                timeEnd: `timeEnd-${random()}`,
                teamId: team_Id
                // teamName : `teamName-${random()}`,
                // teamActivity: `teamActivity-${random()}`
            }))

        await Promise.all(insertions)
  
    })

    it('should succeed on correct user and lesson data', async () => {
        const lessons = await retrieveLessons(id)

        expect(lessons).to.exist
        //expect(lessons).to.have.lengthOf(10)

        lessons.forEach(lesson => {
            expect(lesson.id).to.exist
            expect(lesson.id).to.be.a('string')
            expect(lesson.id).to.have.length.greaterThan(0)
            //expect(lesson.id).be.oneOf(lessonIds)

            expect(lesson.user).to.equal(id)

            expect(lesson.date).to.exist
            expect(lesson.date).to.be.a('string')
            expect(lesson.date).to.have.length.greaterThan(0)
            //expect(lesson.date).be.oneOf(dates)

            expect(lesson.timeStart).to.exist
            expect(lesson.timeStart).to.be.a('string')
            expect(lesson.timeStart).to.have.length.greaterThan(0)
            //expect(lesson.timeStart).be.oneOf(timeStart)

            expect(lesson.timeEnd).to.exist
            expect(lesson.timeEnd).to.be.a('string')
            expect(lesson.timeEnd).to.have.length.greaterThan(0)
            //expect(lesson.timeEnd).be.oneOf(timeEnds)

            expect(lesson.teamId.toString()).to.equal(teamId)

            // expect(lesson.team).to.exist
            // expect(lesson.team).to.be.a('string')
            // expect(lesson.team).to.have.length.greaterThan(0)
            // //expect(lesson.team).be.oneOf(teams)

            // expect(lesson.activity).to.exist
            // expect(lesson.activity).to.be.a('string')
            // expect(lesson.activity).to.have.length.greaterThan(0)
            //expect(lesson.activity).be.oneOf(activities)
        })
    })
            after(() => Promise.all([User.deleteMany(), Lesson.deleteMany()]).then(database.disconnect))

})