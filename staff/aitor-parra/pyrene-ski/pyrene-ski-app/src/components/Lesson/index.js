import React from 'react'
import '../../../src/template/index.sass'

export default function ({ lesson: { id, date, timeStart, timeEnd, teamName, teamActivity }, onChangeStatus }) {
    return <a href="/lessonlist" className={'lesson'}>{/* {id} */}
        <p className="lesson__date">{date}</p>
        <p className="lesson__timeStart">{timeStart}</p>
        <p className="lesson__timeEnd">{timeEnd}</p>
        <p className="lesson__teamName">{teamName}</p>
        <p className="lesson__teamActivity">{teamActivity}</p>
    </a>
}