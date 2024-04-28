import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Descriptions, Divider, Modal, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { ErrorMessage } from '../../components/errorMessage/errorMessage';
import { CustomBtn } from '../../components/customButton/CustomBtn';
import { selectUser } from '../../features/auth/authSlice';
import { isErrorMsg } from '../../utils/isErrorMsg';
import { Layout } from '../../components/layout';
import { Paths } from '../../paths';
import {
  useGetEmployeeQuery,
  useRemoveEmployeeMutation,
} from '../../app/services/employees';

export const Employee = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const params = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading } = useGetEmployeeQuery(params.id || '');
  const [removeEmployee] = useRemoveEmployeeMutation();
  const user = useSelector(selectUser);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data) {
    return <Navigate to='/home' />;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteUser = async () => {
    hideModal();

    try {
      await removeEmployee(data.id).unwrap();
      navigate(`${Paths.status}/deleted`);
    } catch (err) {
      const maybeError = isErrorMsg(error);
      if (maybeError) {
        setError(error.data.message);
      } else {
        setError('Unknown error');
      }
    }
  };

  return (
    <Layout>
      <Descriptions title='Employee information' bordered>
        <Descriptions.Item label='Name' span={3}>
          {`${data.firstName} ${data.lastName}`}
        </Descriptions.Item>
        <Descriptions.Item label='Age' span={3}>
          {data.age}
        </Descriptions.Item>
        <Descriptions.Item label='Address' span={3}>
          {data.address}
        </Descriptions.Item>
      </Descriptions>
      {user?.id === data.userId && (
        <>
          <Divider orientation='left'>Actions</Divider>
          <Space>
            <Link to={`/employees/edit/${data.id}`}>
              <CustomBtn shape='round' type='default' icon={<EditOutlined />}>
                Edit
              </CustomBtn>
            </Link>
            <CustomBtn
              shape='round'
              danger
              onClick={showModal}
              icon={<DeleteOutlined />}
            >
              Delete
            </CustomBtn>
          </Space>
        </>
      )}
      <ErrorMessage message={error} />
      <Modal
        title='Confirm deletion'
        open={isModalOpen}
        onOk={handleDeleteUser}
        onCancel={hideModal}
        okText='Confirm'
        cancelText='Cancel'
      >
        Are you sure you want to remove the employee?
      </Modal>
    </Layout>
  );
};
