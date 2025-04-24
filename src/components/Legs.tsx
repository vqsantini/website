import './Legs.css'

export function Legs(){
    return(
        <div className='legs-main'>
            <div className="legs-content1">
                <div className="legs-content1-asideLeft">
                    <img src="./LegsLock.svg" alt="lock" />
                </div>
                <div className="legs-content1-asideRight">
                    <div className="legs-content1-asideRight-content">
                        <p className='legs-content1-title'>How to design your site footer like we did</p>
                        <p className='legs-content1-description'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="legs-content2">
                <div className="legs-content2-asideLeft">
                    <img src="./Tim.svg" alt="tim" />
                </div>
                <div className="legs-content2-asideRight">
                    <div className="legs-content2-asideRight-content">
                        <p className="legs-content2-asideRight-content-description">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <p className="legs-content2-asideRight-content-name">Tim Smith</p>
                        <p className="legs-content2-asideRight-content-name-association">British Dragon Boat Racing Association</p>
                        <div className="legs-content2-asideRight-content-1">
                            <img src="./LegsPatrociners.svg" alt="patrociners" />
                            <p>Meet all customers →</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="legs-content3">
                <div className="legs-content3-header">
                    <p className="legs-content3-header-title">Caring is the new marketing</p>
                    <p className="legs-content3-header-description">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                <div className="legs-content3-content">
                    <div className="legs-content3-layout">
                        <div className="legs-content3-layout-block">
                            <p className="legs-block-description">Creating Streamlined Safeguarding Processes with OneRen</p>
                            <button className="legs-block-readmore">Readmore →</button>
                        </div>
                    </div>
                    <div className="legs-content3-layout2">
                        <div className="legs-content3-layout-block">
                            <p className="legs-block-description">What are your safeguarding responsibilities and how can you manage them?</p>
                            <button className="legs-block-readmore">Readmore →</button>
                        </div>
                    </div>
                    <div className="legs-content3-layout3">
                        <div className="legs-content3-layout-block">
                            <p className="legs-block-description">Revamping the Membership Model with Triathlon Australia</p>
                            <button className="legs-block-readmore">Readmore →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}