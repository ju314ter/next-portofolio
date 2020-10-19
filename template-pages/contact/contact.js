import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Page from "../../components/page/page";
import Particles from 'react-particles-js';

import './contact.scss'

export const ContactPage = withNavigationContext(({ fullpage }) => {
    return (
        <Page className="contact-page">
            <p>Contact page</p>
        </Page>
    )
});
