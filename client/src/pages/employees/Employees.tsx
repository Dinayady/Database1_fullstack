import { PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';
import { useSelector } from 'react-redux';
import { Employee } from '@prisma/client';
import { useEffect } from 'react';
import { Table } from 'antd';

import { useGetAllEmployeesQuery } from '../../app/services/employees';
import { CustomBtn } from '../../components/customButton/CustomBtn';
import { selectUser } from '../../features/auth/authSlice';
import { Layout } from '../../components/layout';
import { Paths } from '../../paths';

import styles from './style.module.css';

const columns: ColumnsType<Employee> = [
  {
    title: 'Name',
    dataIndex: 'firstName',
    render: (text: string) => <span className={styles.link}>{text}</span>,
    key: 'firstName',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export const Employees = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const { data, isLoading } = useGetAllEmployeesQuery();

  useEffect(() => {
    if (!user) {
      navigate('/home');
    }
  });

  const goToAddUser = () => {
    navigate(Paths.employeeAdd);
  };

  return (
    <Layout>
      <CustomBtn
        type='primary'
        onClick={goToAddUser}
        icon={<PlusCircleOutlined />}
      >
        Add employee
      </CustomBtn>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={(record) => record.id}
        onRow={(record) => {
          return {
            onClick: () => navigate(`${Paths.employee}/${record.id}`),
          };
        }}
      />
    </Layout>
  );
};
