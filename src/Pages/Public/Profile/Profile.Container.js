import Headline from 'Components/PageHelper/Headline'
import { Col, Row } from 'Components/UI-Library'
import { EditOutlined } from 'Components/UI-Library/Icons'
import { useStoreState } from 'easy-peasy'
import React from 'react'
import './index.less'
import useProfile from './Profile.Hook'
import ProfileAvatar from './ProfileAvatar.Component'
import ProfileTabs from './ProfileTabs.Component'

const Profile = () => {
  useProfile()
  const user = useStoreState((state) => state.auth.user)

  return (
    <div className="profile-wrapper">
      <Headline label="PROFILE" />
      <Row gutter={[0, 60]}>
        <Col md={6} offset={1}>
          <ProfileAvatar />
        </Col>
        <Col md={14} offset={2}>
          <h1>
            {user?.firstName} {user?.lastName} <EditOutlined />
          </h1>
          <div className="profile-work">
            <ProfileTabs />
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Profile
