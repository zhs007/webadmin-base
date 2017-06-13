import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import { config, lang } from '../../utils'
import styles from './index.less'

const FormItem = Form.Item

const Reg = ({
  reg,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  const { regLoading } = reg

  function handleLogin () {
      window.location = `${location.origin}/login`
  }

  function handleReg () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt={'logo'} src={config.logo} />
        <span>{config.name}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={handleReg} placeholder="Username" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleReg} placeholder="Password" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('repassword', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleReg} placeholder="Repassword" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleReg} loading={regLoading}>
            {lang[config.lang].reg}
          </Button>
          <p></p>
          <Button type="default" size="large" onClick={handleLogin} loading={regLoading}>
            {lang[config.lang].login}
          </Button>
        </Row>

      </form>
    </div>
  )
}

Reg.propTypes = {
  form: PropTypes.object,
  reg: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ reg }) => ({ reg }))(Form.create()(Reg))
