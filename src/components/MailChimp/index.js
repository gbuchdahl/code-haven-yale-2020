import React from 'react'



const MailChimp = () => {
    return (
        <div className='columns'>
            <form action="https://codehavenyale.us16.list-manage.com/subscribe/post?u=47c13344c2f225f358c8a9b0d&amp;id=1050e12a2a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate column box is-8 is-offset-2" target="_blank" novalidate >
                <h1 className='title is-4'>Join our mailing list!</h1>
                <div id="mc_embed_signup_scroll">
                    <label className="label is-medium">Email</label>
                    <div className="field has-addons has-text-centered">
                        <div className="control is-expanded">
                            <input type="email" name="EMAIL" className="email input is-medium" id="mce-EMAIL" placeholder="email address" required />
                        </div>
                        <div className="control clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button is-primary is-medium" />
                        </div>
                    </div>

                </div>

            </form>
        </div >

    )

}


export default MailChimp
