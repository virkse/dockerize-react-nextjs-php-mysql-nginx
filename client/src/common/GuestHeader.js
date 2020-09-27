import Link from 'next/link'

const GuestHeader = () => (
    <header>
        <div className="header_inner">
            <div className="logo">
                <Link href="/">
                    <a>
                        <span>M</span>
                    </a>
                </Link>
            </div>
        <div className="menus">
            <ul id="responsivemenu">
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <a href="/how-it-works">How it works</a>
                </li>
                <li>
                    <a href="/help/travel-guideline">Trips</a>
                </li>
                <li>
                    <a href="Eatos"></a>
                </li>
                <li>
                    <a href="">Login</a>
                </li>
                <li>
                    <a href="/register">Register</a>
                </li>
            </ul>
            <ul id="menuul">
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/how-it-works"><a>How it works</a></Link>
                </li>
                
                <li>
                    <Link href="/login"><a>Login</a></Link>
                </li>
                <li>
                    <Link href="/register"><a>Register</a></Link>
                </li>
            </ul>
        </div>
    </div>
    <style jsx>{`
    body{
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }
    /** Header **/
    header{
        background: #6314a4;
        min-height: 58px;
        position: relative;
        padding: 10px 0;
        z-index: 5;
    }
    
    .header_inner{
        width: 95%;
        margin: 0 auto;
        height: 54px;
    }
    
    .logo{
        float: left;
    }
    
    .logo a{
        position: relative;
        text-decoration: none;
    }
    .logo a:hover{
        text-decoration: none;
    }
    .logo svg{
        position: absolute;
        left: 100px;
        top: 7px;
    }
    .logo span{
        font-family: Barlow_Condensed;
        color: #fff;
        display: block;
        font-size: 33px;
        z-index: 2;
    }
    .menus{
        float: right;
        margin: 10px;
    }
    
    .menus svg{cursor: pointer;}
    
    .menus ul{
        margin: 0;
        padding: 0;
    }
    .menus ul li{
        list-style: none;
        float: left;
        margin: 0 5px;
    }
    .menus ul li a{
        font-size: 22px;
        text-decoration: none;
        color: white;
    }
    .menus ul li a:hover{
        
    }
    
    .menus ul li a.active{
        border-bottom: 3px solid;
    }
    
    .menus svg{ display: none;}
    .menus ul#responsivemenu{ display: none;}
    
    #responsivemenu{
        background: #6314a4;
        z-index: 2;
        position: absolute;
        top: 65px;
        right: 0;
        border-radius: 5px;
    }
    #responsivemenu li{
        display: block;
        float: none;
        min-width: 300px;
    }
    #responsivemenu li a{}
    
    .contents{
        min-height: 320px;
        overflow: hidden;
        z-index: 1;
        position: relative;
        /**background: #6314a4;**/
        width: 100%;
    }
    
    .m0{
        position: relative;
        height: 700px;
        background:#6314a4;
        width: 100%;
        -ms-transform: skewY(-5deg); /* IE 9 */
        -webkit-transform: skewY(-5deg); /* Safari 3-8 */
        transform: skewY(-5deg);
        z-index: 0;
        position: absolute;
        top: -60px;
    }
    
    
    .m1{
        position: relative;
        height: 700px;
        background-image: url("../images/m/1.jpg");
        background-position: center center;
        width: 100%;
        -ms-transform: skewY(-5deg); /* IE 9 */
        -webkit-transform: skewY(-5deg); /* Safari 3-8 */
        transform: skewY(-5deg);
        transform: skewY(-5deg);
        z-index: 3;
    }
    .m2{
        position: relative;
        height: 700px;
        background-image: url("../images/m/18.jpg");
        background-position: center center;
        width: 100%;
        -ms-transform: skewY(-5deg); /* IE 9 */
        -webkit-transform: skewY(-5deg); /* Safari 3-8 */
        transform: skewY(-5deg);
        opacity: 0.7;
        z-index: 2;
        margin-top: -56px;
    }
    .m3{
        position: relative;
        height: 700px;
        background-image: url("../images/m/5.jpg");
        background-position: center center;
        width: 100%;
        -ms-transform: skewY(-5deg); /* IE 9 */
        -webkit-transform: skewY(-5deg); /* Safari 3-8 */
        transform: skewY(-5deg);
        opacity: 0.7;
        z-index: 1;
    }
    
    .m4{
        position: relative;
        height: 700px;
        background:#6314a4;
        width: 100%;
        -ms-transform: skewY(-5deg); /* IE 9 */
        -webkit-transform: skewY(-5deg); /* Safari 3-8 */
        transform: skewY(-5deg);
        z-index: 0;
        position: absolute;
    }
    `}
    </style>
</header>
)

export default GuestHeader