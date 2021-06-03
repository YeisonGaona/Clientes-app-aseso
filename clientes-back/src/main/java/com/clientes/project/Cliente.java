package com.clientes.project;

import java.time.LocalDate;

public class Cliente {
	private int identificacion;
	
	private String nombre;
	
	private int edad;
	
	private LocalDate fechaNacimiento;
	
	public Cliente(int identificacion, String nombre, int edad, LocalDate fechaNacimiento) {
		this.identificacion=identificacion;
		this.nombre=nombre;
		this.edad=edad;
		this.fechaNacimiento=fechaNacimiento;
	}
	
	public void cambiarAtributos(int identificacion, String nombre, int edad, LocalDate fechaNacimiento) {
		this.identificacion=identificacion;
		this.nombre=nombre;
		this.edad=edad;
		this.fechaNacimiento=fechaNacimiento;
	}
	
	public int getEdad() {
		return edad;
	}
	
	public int getIdentificacion() {
		return identificacion;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public LocalDate getFechaNacimiento() {
		return fechaNacimiento;
	}
	
}
