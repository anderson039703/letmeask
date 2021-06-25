import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext';

export function UserAuth(){
  const value = useContext(AuthContext)

  return value;
}