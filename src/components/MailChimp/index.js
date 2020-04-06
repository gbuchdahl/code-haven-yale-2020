import React from 'react'



const MailChimp = () => {
    return (
        <div className='columns'>
            <form action="https://codehavenyale.us16.list-manage.com/subscribe/post?u=47c13344c2f225f358c8a9b0d&amp;id=1050e12a2a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate column box is-4 is-offset-4" target="_blank" novalidate >
                <h1 className='title is-5'>Join our mailing list!</h1>
                <div id="mc_embed_signup_scroll">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="email" name="EMAIL" className="email input" id="mce-EMAIL" placeholder="email address" required />
                        </div>
                    </div>
                    <div className="clear">
                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button is-primary" />
                    </div>
                </div>

            </form>
        </div >

    )

}


export default MailChimp
