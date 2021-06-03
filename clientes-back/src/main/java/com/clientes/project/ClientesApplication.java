package com.clientes.project;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class ClientesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ClientesApplication.class, args);
	}
	

	@CrossOrigin(origins = "*")
	@GetMapping("/clientes")
	public List<Cliente> obtenerClientes() {
		List<Cliente> listaClientes=new ArrayList<Cliente>();  
		Cliente clienteUno=new Cliente(123, "Carlos mauricio", 30 ,LocalDate.of(1991, 2, 12));
		Cliente clienteDos=new Cliente(456, "Ana maria", 25 ,LocalDate.of(1997, 5, 31));
		Cliente clienteTres=new Cliente(789, "Juan carlos", 18 ,LocalDate.of(2002, 05, 18));
		Cliente clienteCuatro=new Cliente(101, "Yuly katerin", 20 ,LocalDate.of(2001, 9, 29));
		Cliente clienteCinco=new Cliente(112, "Sebastian", 36 ,LocalDate.of(1985, 1, 14));
		Cliente clienteSeis=new Cliente(131, "Angie paola", 27 ,LocalDate.of(1994, 7, 21));
		Cliente clienteSiete=new Cliente(154, "Katalina maria", 35 ,LocalDate.of(1986, 12, 12));
		Cliente clienteOcho=new Cliente(189, "Jorge andres", 42 ,LocalDate.of(1979, 11, 5));
		Cliente clienteNueve=new Cliente(369, "Juan Felipe", 32 ,LocalDate.of(1988, 12, 19));
		Cliente clienteDiez=new Cliente(78910, "Nicolas daniel", 53 ,LocalDate.of(1963, 8, 28));
		listaClientes.add(clienteUno);
		listaClientes.add(clienteDos);
		listaClientes.add(clienteTres);
		listaClientes.add(clienteCuatro);
		listaClientes.add(clienteCinco);
		listaClientes.add(clienteSeis);
		listaClientes.add(clienteSiete);
		listaClientes.add(clienteOcho);
		listaClientes.add(clienteNueve);
		listaClientes.add(clienteDiez);
		return listaClientes;
	}

}
