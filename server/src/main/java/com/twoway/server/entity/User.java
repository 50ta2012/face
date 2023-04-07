package com.twoway.server.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String displayName;
  private String account;
  private String password;
  private String role;
  private LocalDateTime createDateTime;

  public Integer getId() {
    return this.id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getDisplayName() {
    return this.displayName;
  }

  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }

  public String getAccount() {
    return this.account;
  }

  public void setAccount(String account) {
    this.account = account;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return this.role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public LocalDateTime getCreateDateTime() {
    return this.createDateTime;
  }

  public void setCreateDateTime(LocalDateTime createDateTime) {
    this.createDateTime = createDateTime;
  }

  @Override
  public String toString() {
    return "{" +
        " id='" + getId() + "'" +
        ", displayName='" + getDisplayName() + "'" +
        ", account='" + getAccount() + "'" +
        ", password='" + getPassword() + "'" +
        ", role='" + getRole() + "'" +
        ", createDateTime='" + getCreateDateTime() + "'" +
        "}";
  }
}
