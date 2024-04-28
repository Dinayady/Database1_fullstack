import { Employee } from '@prisma/client';
import { Card, Form, Space } from 'antd';
import { CustomInput } from '../customInput/CustomInput';
import { ErrorMessage } from '../errorMessage/errorMessage';
import { CustomBtn } from '../customButton/CustomBtn';

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

export const EmployeeForm = ({
  onFinish,
  btnText,
  title,
  error,
  employee,
}: Props<Employee>) => {
  return (
    <Card title={title} style={{ width: '30rem' }}>
      <Form name='Add employee' onFinish={onFinish} initialValues={employee}>
        <CustomInput type='text' name='firstName' placeholder='Name...' />
        <CustomInput type='text' name='lastName' placeholder='Surname...' />
        <CustomInput type='number' name='age' placeholder='Age...' />
        <CustomInput type='text' name='address' placeholder='Address...' />
        <Space>
          <ErrorMessage message={error} />
          <CustomBtn htmlType='submit'>{btnText}</CustomBtn>
        </Space>
      </Form>
    </Card>
  );
};
