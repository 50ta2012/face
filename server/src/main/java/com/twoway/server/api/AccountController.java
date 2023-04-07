package com.twoway.server.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.twoway.server.entity.User;
import com.twoway.server.entity.UserRepository;

@RestController
@RequestMapping("/account")
public class AccountController {

  @Autowired
  UserRepository userRepository;

  @GetMapping("/all")
  public Iterable<User> getAllUsers() {
    return userRepository.findAll();
  }
}
