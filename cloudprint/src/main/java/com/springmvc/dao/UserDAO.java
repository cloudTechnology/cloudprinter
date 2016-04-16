package com.springmvc.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.springmvc.model.User;

@Repository
public interface UserDAO {
 
    /**
     * 
     * @param user
     * @return
     */
	@Autowired
	public User getUser(User user);
	public int addUser(User user);
	public int updateUser(User user);
	public int deleteUser(String UserId);
     
     
}