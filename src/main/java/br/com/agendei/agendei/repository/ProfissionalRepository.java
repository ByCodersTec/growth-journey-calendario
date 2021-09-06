package br.com.agendei.agendei.repository;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import br.com.agendei.agendei.models.Profissional;

@Repository
public class ProfissionalRepository extends SimpleJpaRepository<Profissional, Long> {

	public ProfissionalRepository(Class<Profissional> domainClass, EntityManager em) {
		super(domainClass, em);

		// TODO Auto-generated constructor stub
	}

}
