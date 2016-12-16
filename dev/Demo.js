import React from 'react';
import {Button, ButtonGroup,ButtonToolbar, Dropdown} from '../src';

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
                    <Button shape='default'  block>Block</Button>
                    <Button shape='primary' active block>Block</Button>
                </ButtonToolbar>
            </div>
        );
    }
});

export default ButtonGroupDemo;
