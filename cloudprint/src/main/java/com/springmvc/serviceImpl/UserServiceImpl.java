package com.springmvc.serviceImpl;

import com.springmvc.dao.UserDAO;
import com.springmvc.model.User;
import com.springmvc.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 

@Service
public class UserServiceImpl implements UserService {
	

	@Autowired
    private UserDAO userDAO;
     
	public int insertUser(User user) {
        // TODO Auto-generated method stub
        return userDAO.addUser(user);
    }

}
