import React from 'react';
import {Button, ButtonGroup, ButtonToolbar, VMenu, Dropdown, Nav, PanelGroup, Panel} from '../src';

const ButtonGroupDemo = React.createClass({
    getInitialState() {
        return {
            status: 'ENABLE',
            formValid: false
        };
    },
    handleSelect(activeButton) {
        console.log('handleSelect', activeButton.props.dataKey);
    },
    handleDropdownSelect(eventKey){
        console.log('handleDropdownSelect', eventKey);
    },
    render() {
        const items = [
            {
                dataKey: '',
                title: '全部1'
            }, {
                dataKey: 'ENABLE',
                title: '启用'
            }, {
                dataKey: 'DISABLE',
                title: '禁用'
            }
        ];

        return (
            <div className="container">
                <h1 className="page-title">LeftMenu</h1>
                <Dropdown activeKey="" shape="success" select onSelect={this.handleDropdownSelect }>
                    <Dropdown.Item eventKey="">全部</Dropdown.Item>
                    <Dropdown.Item eventKey="set">人群集合</Dropdown.Item>
                    <Dropdown.Item eventKey="creator">创建者</Dropdown.Item>
                </Dropdown>
                <h1>按钮</h1>
                <ButtonToolbar>
                    <Button shape='default'>Default</Button>
                    <Button shape='primary'>Primary</Button>
                    <Button shape='success'>Success</Button>
                    <Button shape='warning'>Warning</Button>
                    <Button shape='danger'>Danger</Button>
                    <Button shape='info'>Info</Button>
                    <Button shape='link'>Link</Button>
                </ButtonToolbar>

                <ButtonToolbar>
                    <Button shape='default' block>Block</Button>
                    <Button shape='primary' active block>Block</Button>
                </ButtonToolbar>
                <Nav>
                    <Nav.Item active>Item A</Nav.Item>
                    <Nav.Item>Item B</Nav.Item>
                    <Nav.Item>Item C</Nav.Item>
                    <Nav.Item disabled>Item D</Nav.Item>
                </Nav>
                <PanelGroup defaultActiveKey="2" accordion>
                    <VMenu header="VMenu 1" eventKey="1">VMenu 1 content</VMenu>
                    <Panel header="Panel 4" eventKey="4">Panel 1 content</Panel>
                    <VMenu header="VMenu 5" eventKey="5">
                        <Nav>
                            <Nav.Item active>Item A</Nav.Item>
                            <Nav.Item>Item B</Nav.Item>
                            <Nav.Item>Item C</Nav.Item>
                        </Nav>
                    </VMenu>
                    <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
                    <Panel header="Panel 3" eventKey="3">Panel 3 content</Panel>
                </PanelGroup>
            </div>
        );
    }
});

export default ButtonGroupDemo;
