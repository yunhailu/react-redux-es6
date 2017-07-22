import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './index.less';


export default class Page2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'mail',
        }
    }
    handleClick (e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        const { SubMenu, MenuItemGroup, Item } = Menu;
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Item key="mail">
                    <Icon type="mail" />Navigation One
                </Item>
                <Item key="app" disabled>
                    <Icon type="appstore" />Navigation Two
                </Item>
                <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Item key="setting:1">Option 1</Item>
                        <Item key="setting:2">Option 2</Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Item key="setting:3">Option 3</Item>
                        <Item key="setting:4">Option 4</Item>
                    </MenuItemGroup>
                </SubMenu>
                <Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </Item>
            </Menu>
        );
    }
}