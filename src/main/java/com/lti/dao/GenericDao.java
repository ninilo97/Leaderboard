package com.lti.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

@Repository
public class GenericDao {

	@PersistenceContext
	private EntityManager entityManager;
	
	public Object save(Object obj)
	{
		return entityManager.merge(obj);
		
	}
}