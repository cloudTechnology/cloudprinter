package hello;

import com.springmvc.model.User;
import com.springmvc.service.UserService;

import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


 
//@RunWith(SpringJUnit4ClassRunner.class)
public class UserTest{
	
	private UserService userService;
	@Before
	public void before(){                                                                   
        @SuppressWarnings("resource")
        ApplicationContext context = new ClassPathXmlApplicationContext(new String[]{"classpath:conf/spring.xml"
                ,"classpath:conf/spring-mybatis.xml"});
        userService = (UserService) context.getBean("userServiceImpl");
    }
	@Test
	public void addUser(){
        User user = new User();
        user.setUsername("肖谦-2");
        user.setPassword("asdfb");
        System.out.println(userService.insertUser(user));
    }

	@Test
	public void print(){
		System.out.print("hello");
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
