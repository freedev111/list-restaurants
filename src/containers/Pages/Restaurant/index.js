import React, { useState, useLayoutEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, Table, Space, notification, Row, Col } from 'antd'
import {
  findRestaurant,
  selectRestaurant,
  selectLoading,
  selectError,
} from 'store/restaurant'
import _ from 'lodash'

const Restaurant = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
    },
  ]
  const [city, setCity] = useState('')
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const restaurants = useSelector(selectRestaurant)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const filter = (data) => {
    if (search === '') {
      return data
    }

    return data.filter(
      (item) =>
        item['name'].includes(search) ||
        item['address'].includes(search) ||
        item['area'].includes(search),
    )
  }
  const handleFind = async () => {
    dispatch(findRestaurant(city))
  }

  useLayoutEffect(() => {
    if (!error) {
      return
    }

    notification.open({
      message: 'Error Found',
      description: error,
    })
  }, [error])

  return (
    <Row justify='center' style={{ margin: '2rem 0' }}>
      <Col span={16}>
        <Row justify='end' style={{ marginBottom: '1rem' }}>
          <Space direction='vertical' size='middle'>
            <Col>
              <Space size='middle'>
                <Input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder='City...'
                />
                <Button
                  type='primary'
                  shape='round'
                  onClick={handleFind}
                  loading={loading}
                >
                  Find Restaurant
                </Button>
              </Space>
            </Col>
            <Col>
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search Restaurant...'
              />
            </Col>
          </Space>
        </Row>
        <Table
          columns={columns}
          dataSource={filter(restaurants)}
          loading={loading}
        />
      </Col>
    </Row>
  )
}

export default Restaurant
