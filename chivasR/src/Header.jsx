import './Header.css';

function Header() {
    return(
        <header>
            <div className='headerStyle'>
                <h1 class='logoStyle'>CHIVASTV</h1>
            </div>

            <div className='headerBack'>
                <div className='mediaStyle'>
                    <ul className='menuItemStyle'>
                        <li>SANTUARIO ROJIBLANCO</li>
                        <li>|</li>
                        <li>🔍</li>
                        <li>|</li>
                        <li>REGÍSTRATE</li>
                        <li>|</li>
                        <li>INICIAR SESIÓN</li>
                    </ul>
                </div>
                
                <div className='contactStyle'>
                    <ul>
                        <li className='socialIcon'>f</li>
                        <li className='socialIcon'>t</li>
                        <li className='socialIcon'>y</li>
                        <li className='socialIcon'>G+</li>
                        <li className='socialIcon'>0</li>
                    </ul>
                </div>
            </div>
        </header>

    );
}

export default Header;

/*
        
        <div style={headerStyle}>
        <div style={leftSectionStyle}>
            <h1 style={logoTextStyle}>CHIVASTV</h1>
        </div>
        <div style={rightSectionStyle}>
            <div style={socialIconsStyle}>
                <div style={socialIcon}>f</div>
                <div style={socialIcon}>t</div>
                <div style={socialIcon}>y</div>
                <div style={socialIcon}>G+</div>
                <div style={socialIcon}>0</div>
            </div>
            <div style={menuStyle}>
                <span style={menuItemStyle}>SANTUARIO ROJIBLANCO</span>
                <span style={separatorStyle}>|</span>
                <span style={menuItemStyle}>🔍</span>
                <span style={separatorStyle}>|</span>
                <span style={menuItemStyle}>REGÍSTRATE</span>
                <span style={separatorStyle}>|</span>
                <span style={menuItemStyle}>INICIAR SESIÓN</span>
            </div>
        </div>
    </div>

    const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    background: 'linear-gradient(to right, #283593 20%, #FFFFFF 20%, #FFFFFF 70%, #E53935 70%)',
    padding: '0 20px',
};

const leftSectionStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
};

const logoTextStyle = {
    margin: 0,
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#FFF'
};

const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
};

const socialIconsStyle = {
    display: 'flex',
    marginRight: '20px',
};

const socialIcon = {
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    backgroundColor: '#03A9F4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5px',
    fontWeight: 'bold',
    color: '#FFF'
};

const menuStyle = {
    display: 'flex',
    alignItems: 'center',
};

const menuItemStyle = {
    marginLeft: '10px',
    fontWeight: 'bold',
    fontSize: '0.9em',
    color: '#000'
};

const separatorStyle = {
    margin: '0 10px',
    color: '#000',
    fontWeight: 'bold',
};

 */

