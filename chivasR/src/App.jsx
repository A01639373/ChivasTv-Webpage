import React from 'react';

const App = () => {
    return (
        <div style={appContainer}>
            <Header />
            <div style={contentContainer}>
                <Sidebar />
                <MainImage />
            </div>
        </div>
    );
};

const Header = () => (
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
);

const Sidebar = () => (
    <div style={sidebarStyle}>
        {['Relevante', 'Estreno', 'Clásico de México', 'DDR', 'Raíces', 'Resumen', 'ETC'].map((item, index) => (
            <div key={index} style={sidebarItemStyle}>
                <div style={sidebarIconStyle}>⚽</div>
                <span>{item}</span>
            </div>
        ))}
    </div>
);

const MainImage = () => (
    <div style={mainImageContainer}>
        <img
            src="/images/elementor-placeholder-image.webp"
            alt="Chivas vs Cruz Azul"
            style={mainImageStyle}
        />
        <div style={imageCaptionStyle}>Chivas vs Cruz Azul</div>
    </div>
);

const appContainer = {
    fontFamily: 'sans-serif',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
};

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

const contentContainer = {
    display: 'flex',
    flex: 1
};

const sidebarStyle = {
    width: '80px',
    backgroundColor: '#F8F8F8',
    borderRight: '1px solid #CCC',
    paddingTop: '10px'
};

const sidebarItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '15px',
    fontSize: '0.75em',
    cursor: 'pointer'
};

const sidebarIconStyle = {
    backgroundColor: '#E0E0E0',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5px'
};

const mainImageContainer = {
    flex: 1,
    position: 'relative',
    overflow: 'hidden'
};

const mainImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
};

const imageCaptionStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#FFF',
    padding: '5px 10px',
    borderRadius: '5px'
};

export default App;
