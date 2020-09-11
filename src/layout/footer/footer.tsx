
import style from './footer.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCopyright, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTelegramPlane, faGithub, faStackOverflow, faPatreon } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const socialMediaLinks: { icon: IconDefinition, link: string }[] = [
        {
            icon: faLinkedinIn,
            link: 'https://www.linkedin.com/in/joshuaalzate/'
        },
        {
            icon: faTelegramPlane,
            link: 'https://t.me/joshanity17'
        },
        {
            icon: faGithub,
            link: 'https://github.com/Joshanity17'
        },
        {
            icon: faStackOverflow,
            link: 'https://stackoverflow.com/users/2637261/rich'
        },
        {
            icon: faPatreon,
            link: 'https://www.patreon.com/rjalzate'
        },
        {
            icon: faEnvelope,
            link: 'mailto:josh.alzate17@gmail.com'
        }
    ];
    return (
        <>
            <footer id={style["footer"]} className={classNames("row flex-column align-items-center justify-content-center")}>
                <div id={style["logo"]} className={classNames("brand-logo")}>
                    <a href="/">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" id={style["j-logo"]} width="182.000000pt" height="266.000000pt"
                            viewBox="0 0 182.000000 266.000000" preserveAspectRatio="xMidYMid meet"
                            alphabetic="Rich Joshua Alzate | Full-Stack Developer, Musician, Photographer">
                            <g id={style["stroke"]} transform="translate(0.000000,266.000000) scale(0.100000,-0.100000)" fill="#000000"
                                stroke="none">
                                <path d="M1503 2545 c-161 -45 -398 -209 -615 -428 -324 -326 -516 -695 -440
                                -847 23 -48 55 -62 120 -55 118 12 264 97 403 235 86 86 129 153 129 204 0 41
                                -21 28 -48 -29 -34 -70 -107 -160 -184 -225 -96 -81 -157 -111 -234 -118 -60
                                -4 -64 -3 -93 26 -75 75 -22 254 149 497 245 350 651 685 830 685 84 0 124
                                -83 94 -197 -26 -104 -86 -243 -221 -513 -134 -268 -147 -294 -262 -498 l-63
                                -113 -92 -43 c-256 -119 -530 -363 -702 -623 -131 -198 -183 -357 -138 -421
                                12 -17 25 -22 58 -22 132 0 401 298 796 881 l131 194 77 17 c102 22 186 23
                                206 2 32 -31 15 -115 -33 -158 -27 -25 -18 -37 21 -26 39 12 65 35 88 80 28
                                56 35 106 17 133 -30 46 -139 59 -256 32 -35 -9 -66 -13 -69 -11 -2 3 38 76
                                90 163 209 347 383 687 438 852 81 242 -3 380 -197 326z m-493 -1463 c0 -22
                                -244 -389 -389 -585 -169 -227 -297 -343 -374 -335 -29 3 -32 6 -35 41 -11
                                127 154 387 382 603 124 119 201 176 319 239 84 46 97 51 97 37z" />
                            </g>
                        </svg>
                    </a>
                </div>

                <div id={style["motto"]}>
                    <h4>Make it happen</h4>
                </div>

                <div id={style["socialSection"]} className="row justify-content-center">
                    {
                        socialMediaLinks.map(element => {
                            return (
                                <div className={classNames(style["socialMediaLinks"], "row align-items-center")}>
                                    <a href={element.link} className={classNames("row justify-content-center align-items-center")}>
                                        <FontAwesomeIcon icon={element.icon} />
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

                <div id={style["copyrightSection"]}>
                    <h5 id={style["copyright"]}>
                        Written by me
                        <FontAwesomeIcon icon={faCopyright} />
                        2020
                    </h5>
                </div>

            </footer >
        </>
    )

}