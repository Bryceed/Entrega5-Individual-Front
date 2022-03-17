package br.org.recodepro.squad19mangut.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.recodepro.squad19mangut.models.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

}
