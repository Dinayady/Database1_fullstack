import { Link } from 'react-router-dom';
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Space, Typography } from 'antd';

import { CustomBtn } from '../customButton/CustomBtn';
import { Paths } from '../../paths';

import styles from './style.module.css';

export const Header = () => {
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomBtn type='link'>
            <Typography.Title level={1}>Employees</Typography.Title>
          </CustomBtn>
        </Link>
      </Space>
      <Space className={styles.authorization}>
        <Link to={Paths.login}>
          <CustomBtn type='link' icon={<UserOutlined />}>
            Log In
          </CustomBtn>
        </Link>
        <Link to={Paths.register}>
          <CustomBtn type='link' icon={<LoginOutlined />}>
            Sign Up
          </CustomBtn>
        </Link>
      </Space>
    </Layout.Header>
  );
};
