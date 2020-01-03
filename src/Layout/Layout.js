import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import { Route, Switch, Link, useLocation } from 'react-router-dom';
import Counter from '../examples/Counter';
import Posts from '../examples/Posts';

const { Header, Content } = AntLayout;

const Layout = () => {
  return (
    <AntLayout className='layout'>
      <Header style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={[useLocation().pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='/'>
            <span>Counter Example</span>
            <Link to='/' />
          </Menu.Item>
          <Menu.Item key='/posts'>
            <span>Fetch Posts Example </span>
            <Link to='/posts' />
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div
          style={{
            background: '#fff',
            padding: 24,
            minHeight: 280,
            margin: 24
          }}
        >
          <Switch>
            <Route path='/posts' component={Posts} />
            <Route exact path='/' component={Counter} />
          </Switch>
        </div>
      </Content>
    </AntLayout>
  );
};

export default Layout;
