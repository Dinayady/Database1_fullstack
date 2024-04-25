import { Button, ConfigProvider, Form } from 'antd';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  shape?: 'default' | 'circle' | 'round' | undefined;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined;
};

export const CustomBtn = ({
  children,
  htmlType,
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
}: Props) => {
  return (
    <Form.Item>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorLink: '#b4b198',
              colorLinkActive: '#838064',
              colorLinkHover: '#c7c28f',
            },
          },
        }}
      >
        <Button
          onClick={onClick}
          danger={danger}
          loading={loading}
          icon={icon}
          shape={shape}
          htmlType={htmlType}
          type={type}
        >
          {children}
        </Button>
      </ConfigProvider>
    </Form.Item>
  );
};
