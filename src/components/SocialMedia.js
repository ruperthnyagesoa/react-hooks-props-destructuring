import React from "react"

function SocialMedia( {socialLinks} ) {
    // socialLinks is an obj, can be destructed
    const { github, linkedin } = socialLinks;
    return (
        <div>
            {/* without destructing */}
            <a href={socialLinks.github}>{socialLinks.github}</a>
            <a href={socialLinks.linkedin}>{socialLinks.linkedin}</a>

            {/* with destructing */}
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
        </div>
    )
}

export default SocialMedia