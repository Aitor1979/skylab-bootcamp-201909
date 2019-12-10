import React from 'react'
import '../../../src/template/index.sass'

export default function ({ team: { id, teamName, teamEmail, teamPhone, teamActivity } }) {
    return <div className={'team'}>{/* {id} */}
        <p className="team__teamName">{teamName} </p>
        <p className="team__teamActivity">{teamActivity} </p>
        <a href={`mailto:${teamEmail}`} className="team__teamEmail"><i class="far fa-envelope margin"></i> {teamEmail}</a>
        <a href={`tel:${teamPhone}`} className="team__teamPhone"><i class="fas fa-phone margin"></i> {teamPhone}</a>


    </div>
}
/*         
--------- TO DELETE TEAM --------
<span className="team__teamDelete">
    <form method="delete" onSubmit={event => { event.preventDefault(); onRemoveTeam(id) }}>
        <button type="submit" title="delete-button">❌</button>
    </form>
</span>
---------------------------------

*/
