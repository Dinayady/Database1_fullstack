import {
  LoginOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';

import { logout, selectUser } from '../../features/auth/authSlice';
import { CustomBtn } from '../customButton/CustomBtn';
import { Paths } from '../../paths';

import styles from './style.module.css';

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/home');
  };

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
      {user ? (
        <CustomBtn
          type='link'
          icon={<LogoutOutlined />}
          onClick={onLogoutClick}
        >
          Exit
        </CustomBtn>
      ) : (
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
      )}
    </Layout.Header>
  );
};
