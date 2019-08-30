package com.lti.dao;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.lti.entity.CardEntity;

@Repository
public class LeaderboardDaoImpl implements LeaderboardDao{

	@PersistenceContext
	private EntityManager entityManager;

	public void save(Object obj) {
		entityManager.merge(obj);
	}

	public List<CardEntity> fetchCard(LocalDate todaysDate) {
		String query  = "Select c from CardEntity c where c.fromDate<=:todaysDate and c.toDate>=:todaysDate";
		Query q = entityManager.createQuery(query);
		q.setParameter("todaysDate", todaysDate);
		return (List<CardEntity>) q.getResultList();
	}

	public List<CardEntity> fetchAllCard() {
		String query  = "Select c from CardEntity c";
		Query q = entityManager.createQuery(query);
		return (List<CardEntity>) q.getResultList();
	}
}
