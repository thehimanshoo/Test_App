import React from 'react'
import { Button, Tab ,Header, Image, Modal } from 'semantic-ui-react';
import "./Navbar.css";

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

const NavBar = () => {

    const [open, setOpen] = React.useState(false)

  return (
    <div>
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            centered={false}
            size="tiny"
            className="modal-wrapper"
            trigger={<Button fluid floated="right" color="blue" inverted size="big">Connect to a Wallet</Button>}
        >
            <Modal.Header>
                <div className="header-of-modal">
                    <h3>Connect To a <br/>Wallet</h3>
                    <button className="close-btn-custom" onClick={() => setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="custom-dimension-of-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </Modal.Header>
            <Modal.Content>
                <div className="bg-custom-light">
                    <div className="contents">
                        <p>
                            By connecting a wallet, you agree to Uniswap Labs' <a href="" className="text-decoration">Terms of Service</a> and acknowledge that you have read and understand the
                            <a
                            href="" className="only-blue">
                                Uniswap protocol disclaimer.
                            </a>
                        </p>
                    </div>
                </div>
                <div className="bg-custom-light">
                    <div className="contents">
                        <div className="title">
                            Install Metamask
                        </div>
                    </div>
                    <div className="img-box">
                        <img src="https://s.yimg.com/fz/api/res/1.2/idd2BgvIg6OVFcj4k0AVHQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9MTY2/https://s.yimg.com/zb/imgv1/ec0780ef-69ac-3ea7-b163-ed94ad3bb2ec/t_1024x1024" alt=""/>
                    </div>
                </div>
                <div className="bg-custom-light">
                    <div className="contents">
                        <div className="title">
                            WalletConnect
                        </div>
                    </div>
                    <div className="img-box">
                        <img src="https://walletconnect.org/walletconnect-logo.svg" alt=""/>
                    </div>
                </div>
                <div className="bg-custom-light">
                    <div className="contents">
                        <div className="title">
                            Coinbase Wallet
                        </div>
                    </div>
                    <div className="img-box">
                        <img src="https://avatars.githubusercontent.com/u/18060234?s=200&v=4" alt=""/>
                    </div>
                </div>
                <div className="bg-custom-light">
                    <div className="contents">
                        <div className="title">
                            Fortmatic
                        </div>
                    </div>
                    <div className="img-box">
                        <img src="https://gblobscdn.gitbook.com/spaces%2F-Lj7HukBJLlR6jbx0-eP%2Favatar.png?alt=media" alt=""/>
                    </div>
                </div>
                <div className="bg-custom-light">
                    <div className="contents">
                        <div className="title">
                            Portis
                        </div>
                    </div>
                    <div className="img-box">
                        <img src="https://apkplz.net/storage/images/com/portis/wallet/com.portis.wallet_1.png" alt=""/>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
      <div className="menu-bar">
          <div className="menu-items">
            <a className="active">Swap</a>
            <a>Pool</a>
            <a>Vote</a>
            <a>Charts</a>
          </div>
      </div>
    </div>
  )
}

export default NavBar