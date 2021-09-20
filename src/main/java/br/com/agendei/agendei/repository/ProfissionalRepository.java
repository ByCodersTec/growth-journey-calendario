package br.com.agendei.agendei.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.agendei.agendei.models.Profissional;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Long>{

}
