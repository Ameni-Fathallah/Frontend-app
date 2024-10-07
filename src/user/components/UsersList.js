import React from 'react'
import './UsersList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElement/Card';

const UsersList = (props) => {
    if(props.items.length===0){
        return (
            <div className='center'>
                {/* to wrap the h2 tag to look  nicer */}
                <Card>
                    <h2>No users found.</h2>
                </Card>
            </div>
          )
    }

    return (<ul className='users-list'>
        {props.items.map(user=>{
            return <UserItem 
            is={user.id}
            key={user.id} 
            image={user.image} 
            name={user.name} 
            placeCount={user.places}/>;
        })}
    </ul>)
  
};
export default UsersList