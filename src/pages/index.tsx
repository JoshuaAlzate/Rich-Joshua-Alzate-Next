
import style from './index.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RJAAvatarWebp from '../assets/images/webp/RJA_Avatar.webp';
import RJAAvatarPNG from '../assets/images/png/RJA_Avatar.png';
import CareerSVG from '../assets/images/svg/career.svg';
import CodeSVG from '../assets/images/svg/code.svg';
import TypeScriptSVG from '../assets/images/svg/typescript.svg';
import CSSVG from '../assets/images/svg/cs.svg';
import ASPNetSVG from '../assets/images/svg/asp.net.svg';
import LesPaulSVG from '../assets/images/svg/les-paul.svg';
import PianoSVG from '../assets/images/svg/piano.svg';
import GibsonSVG from '../assets/images/svg/gibson.svg';
import MarshallSVG from '../assets/images/svg/marshall.svg';
import AuditionCCSVG from '../assets/images/svg/audition_cc.svg';
import AudacitySVG from '../assets/images/svg/audacity.svg';
import CameraRetroSVG from '../assets/images/svg/camera-retro.svg';
import SamsungSVG from '../assets/images/svg/samsung.svg';
import PhotoshopCCSVG from '../assets/images/svg/photoshop_cc.svg';
import AfterEffectsCCSVG from '../assets/images/svg/after_effects_cc.svg';
import IllustratorCCSVG from '../assets/images/svg/illustrator_cc.svg';
import SnapseedSVG from '../assets/images/svg/snapseed.svg';

import { faJsSquare, faHtml5, faCss3Alt, faSass, faAngular, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDrum, faDatabase, faGuitar } from '@fortawesome/free-solid-svg-icons';

export default function Index() {

    return (
        <>
            <section id={style['home-section']} className={classNames('row')}>
                <div id={style['name-details']} className={classNames(style['details-section'], "col-xs-12 col-sm-12 col-md-6 row justify-content-center align-items-center")}>
                    <div id={style['avatar']}>
                        <picture>
                            <source srcSet={RJAAvatarWebp} type="image/webp" />
                            <source srcSet={RJAAvatarPNG} type="image/png" />
                            <img id={style['avatar-image']} alt="Rich Joshua Alzate | Full-Stack Developer, Musician, & Photographer" />
                        </picture>
                    </div>
                    <div id={style['text-details']} >
                        <h1 id={style['name']} className="dark">Rich Joshua Alzate</h1>
                        <p className="dark">Full-Stack Developer, Musician, & Photographer</p>
                    </div>
                </div>
                <div id={style['description-details']} className={classNames(style['details-section'], "col-xs-12 col-sm-12 col-md-6 row justify-content-center flex-column bg-dark")}>
                    <h1 className="light">Hi, nice to meet you.</h1>
                    <p className="light">
                        Everything started with passion for technologies. Curiosity how things work as it is, and desire to create
                        things that makes a difference. I started nearly 4 years ago in Software Development field, I’ve worked from
                        small start-up companies, up to big companies along the way. Collaborated with amazing people to build
                        digital products for both business and consumer use. I enjoy designing, and coding beautifully simple
                        things, my unequivocal love for making things, my ball of fire ethic to create something to make the world a
                        better place.
                    </p>
                </div>
            </section>
            <section id={style['skillSection']} className={classNames('row flex-column')}>
                <div id={style['skillSVG']} className={classNames('row justify-content-center')}>
                    <picture>
                        <source srcSet={CareerSVG} />
                        <img id={style['skillImage']} alt="skill" />
                    </picture>
                </div>
                <div id={style['skillDetails']} className={classNames('row')}>
                    <div id={style['fullStackDetails']} className={classNames(style['skill-column'], ' col-xs-12 col-sm-12 col-md-4 row flex-column align-items-center')}>
                        <img src={CodeSVG} />
                        <h2>Developer</h2>
                        <p className={classNames(style['skillIntroduction'])}>
                            This is what I do professionally, I love creating something that makes a dent to this whole world. This
                            is my avenue to create something useful to everyone.
                            </p>
                        <h3>Languages I speak:</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faJsSquare} className={classNames(style['icon'])}></FontAwesomeIcon>
                                JavaScript
                                </li>
                            <li>
                                <img src={TypeScriptSVG} className={classNames(style['icon'])} />
                                TypeScript
                                </li>
                            <li>
                                <img src={CSSVG} className={classNames(style['icon'])} />
                                C#
                                </li>
                            <li>
                                <FontAwesomeIcon icon={faHtml5} className={classNames(style['icon'])}></FontAwesomeIcon>
                                HTML
                                </li>
                            <li>
                                <FontAwesomeIcon icon={faCss3Alt} className={classNames(style['icon'])}></FontAwesomeIcon>
                                CSS
                                </li>
                            <li>
                                <FontAwesomeIcon icon={faSass} className={classNames(style['icon'])}></FontAwesomeIcon>
                                SASS
                                </li>
                            <li>
                                <FontAwesomeIcon icon={faDatabase} className={classNames(style['icon'])}></FontAwesomeIcon>
                                SQL
                                </li>
                        </ul>
                        <h3>Frameworks:</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faAngular} className={classNames(style['icon'])}></FontAwesomeIcon>
                                Angular
                                </li>
                            <li>
                                <img src={ASPNetSVG} className={classNames(style['icon'])} />
                                ASP.Net
                                </li>
                            <li>
                                <FontAwesomeIcon icon={faNodeJs} className={classNames(style['icon'])}></FontAwesomeIcon>
                                Node
                            </li>
                        </ul>
                    </div>
                    <div id={style['musicianDetails']} className={classNames(style['skill-column'], ' col-xs-12 col-sm-12 col-md-4 row flex-column align-items-center')}>
                        <img src={LesPaulSVG} />
                        <h2>Musician</h2>
                        <p className={classNames(style['skillIntroduction'])}>
                            I am enthusiastic on creating music that can mean different on every person, inspiring, and convering
                            emotions into notes.
                                </p>
                        <h3>Instruments I play:</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faGuitar} className={classNames(style['icon'])}></FontAwesomeIcon>
                                Guitar
                            </li>
                            <li>
                                <img src={PianoSVG} className={classNames(style['icon'])} />
                                Keys
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faDrum} className={classNames(style['icon'])}></FontAwesomeIcon>
                                Percussions
                            </li>
                        </ul>
                        <h3>Hardware/Software tools:</h3>
                        <ul>
                            <li>
                                <img src={GibsonSVG} className={classNames(style['icon'])} />
                                Gibson Les Paul Modern
                            </li>
                            <li>
                                <img src={MarshallSVG} className={classNames(style['icon'])} />
                                Marshall MG30FX
                            </li>
                            <li>
                                <img src={AuditionCCSVG} className={classNames(style['icon'])} />
                                Adobe Audition CC
                            </li>
                            <li>
                                <img src={AudacitySVG} className={classNames(style['icon'])} />
                                Audacity
                            </li>
                        </ul>
                    </div>
                    <div id={style['photographerDetails']} className={classNames(style['skill-column'], ' col-xs-12 col-sm-12 col-md-4 row flex-column align-items-center')}>
                        <img src={CameraRetroSVG} />
                        <h2>Photographer</h2>
                        <p className={classNames(style['skillIntroduction'])}>
                            I love capturing once in a lifetime moments that will last forever on a single photograph. It's an art
                            to freeze moments, time, and space.
                                     </p>
                        <h3>Gear that I use:</h3>
                        <p>
                            <img src={SamsungSVG} className={classNames(style['icon'])} />
                                Samsung S10+
                         </p>
                        <h3>Post-processing tools:</h3>
                        <ul>
                            <li>
                                <img src={PhotoshopCCSVG} className={classNames(style['icon'])} />
                                Adobe Photoshop
                            </li>
                            <li>
                                <img src={AfterEffectsCCSVG} className={classNames(style['icon'])} />
                                Adobe After Effects
                            </li>
                            <li>
                                <img src={IllustratorCCSVG} className={classNames(style['icon'])} />
                                Adobe Illustrator
                            </li>
                            <li>
                                <img src={SnapseedSVG} className={classNames(style['icon'])} />
                                Google Snapseed
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}