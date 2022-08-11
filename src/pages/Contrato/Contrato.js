import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons"
import "../../utils/numeros_letras"

export default function Contrato() {
    const toInputUppercase = e => {
        e.target.value = ("" + e.target.value).toUpperCase();
    };


    if (typeof document !== "undefined") {
        var arrendador__dni = document.getElementById('arrendador__dni');
        var arrendador__dni__dato = document.getElementById('arrendador__dni__dato');
        var arrendador__nombre = document.getElementById('arrendador__nombre');
        var arrendador__nombre__dato = document.getElementById('arrendador__nombre__dato');
        var arrendador__apellidos = document.getElementById('arrendador__apellidos');
        var arrendador__apellidos__dato = document.getElementById('arrendador__apellidos__dato');
        var arrendador__direccion = document.getElementById('arrendador__direccion');
        var arrendador__direccion__dato = document.getElementById('arrendador__direccion__dato');
        var arrendador__distrito = document.getElementById('arrendador__distrito');
        var arrendador__distrito__dato = document.getElementById('arrendador__distrito__dato');
        var arrendador__provincia = document.getElementById('arrendador__provincia');
        var arrendador__provincia__dato = document.getElementById('arrendador__provincia__dato');
        var arrendador__departamento = document.getElementById('arrendador__departamento');
        var arrendador__departamento__dato = document.getElementById('arrendador__departamento__dato');

        var arrendatario__dni = document.getElementById('arrendatario__dni');
        var arrendatario__dni__dato = document.getElementById('arrendatario__dni__dato');
        var arrendatario__nombre = document.getElementById('arrendatario__nombre');
        var arrendatario__nombre__dato = document.getElementById('arrendatario__nombre__dato');
        var arrendatario__apellidos = document.getElementById('arrendatario__apellidos');
        var arrendatario__apellidos__dato = document.getElementById('arrendatario__apellidos__dato');
        var arrendatario__direccion = document.getElementById('arrendatario__direccion');
        var arrendatario__direccion__dato = document.getElementById('arrendatario__direccion__dato');
        var arrendatario__distrito = document.getElementById('arrendatario__distrito');
        var arrendatario__distrito__dato = document.getElementById('arrendatario__distrito__dato');
        var arrendatario__provincia = document.getElementById('arrendatario__provincia');
        var arrendatario__provincia__dato = document.getElementById('arrendatario__provincia__dato');
        var arrendatario__departamento = document.getElementById('arrendatario__departamento');
        var arrendatario__departamento__dato = document.getElementById('arrendatario__departamento__dato');

        var propiedad__descripcion = document.getElementById('propiedad__descripcion');
        var propiedad__descripcion__dato = document.getElementById('propiedad__descripcion__dato');
        var propiedad__ubicacion = document.getElementById('propiedad__ubicacion');
        var propiedad__ubicacion__dato = document.getElementById('propiedad__ubicacion__dato');
        var propiedad__distrito = document.getElementById('propiedad__distrito');
        var propiedad__distrito__dato = document.getElementById('propiedad__distrito__dato');
        var propiedad__provincia = document.getElementById('propiedad__provincia');
        var propiedad__provincia__dato = document.getElementById('propiedad__provincia__dato');
        var propiedad__departamento = document.getElementById('propiedad__departamento');
        var propiedad__departamento__dato = document.getElementById('propiedad__departamento__dato');

        if (arrendador__dni) {
            arrendador__dni.addEventListener('keyup', () => {
                arrendador__dni__dato.innerHTML = arrendador__dni.value;
                console.log(arrendador__dni.value);
            });
            arrendador__dni.addEventListener('change', () => {
                arrendador__dni__dato.innerHTML = arrendador__dni.value;
                console.log(arrendador__dni.value);
            });
        }

        if (arrendatario__dni) {
            arrendatario__dni.addEventListener('keyup', () => {
                arrendatario__dni__dato.innerHTML = arrendatario__dni.value;
                console.log(arrendatario__dni.value);
            });
            arrendatario__dni.addEventListener('change', () => {
                arrendatario__dni__dato.innerHTML = arrendatario__dni.value;
                console.log(arrendatario__dni.value);
            });
        }

        if (arrendador__nombre &&
            arrendador__apellidos &&
            arrendador__direccion &&
            arrendador__distrito &&
            arrendador__provincia &&
            arrendador__departamento) {
            arrendador__nombre.addEventListener('keyup', () => {
                arrendador__nombre__dato.innerHTML = arrendador__nombre.value;
                console.log(arrendador__nombre.value);
            });

            arrendador__apellidos.addEventListener('keyup', () => {
                arrendador__apellidos__dato.innerHTML = arrendador__apellidos.value;
                console.log(arrendador__apellidos.value);
            });

            arrendador__direccion.addEventListener('keyup', () => {
                arrendador__direccion__dato.innerHTML = arrendador__direccion.value;
                console.log(arrendador__direccion.value);
            });

            arrendador__distrito.addEventListener('keyup', () => {
                arrendador__distrito__dato.innerHTML = arrendador__distrito.value;
                console.log(arrendador__distrito.value);
            });

            arrendador__provincia.addEventListener('keyup', () => {
                arrendador__provincia__dato.innerHTML = arrendador__provincia.value;
                console.log(arrendador__provincia.value);
            });

            arrendador__departamento.addEventListener('keyup', () => {
                arrendador__departamento__dato.innerHTML = arrendador__departamento.value;
                console.log(arrendador__departamento.value);
            });
        }

        if (arrendatario__nombre &&
            arrendatario__apellidos &&
            arrendatario__direccion &&
            arrendatario__distrito &&
            arrendatario__provincia &&
            arrendatario__departamento) {

            arrendatario__nombre.addEventListener('keyup', () => {
                arrendatario__nombre__dato.innerHTML = arrendatario__nombre.value;
                console.log(arrendatario__nombre.value);
            });

            arrendatario__apellidos.addEventListener('keyup', () => {
                arrendatario__apellidos__dato.innerHTML = arrendatario__apellidos.value;
                console.log(arrendatario__apellidos.value);
            });

            arrendatario__direccion.addEventListener('keyup', () => {
                arrendatario__direccion__dato.innerHTML = arrendatario__direccion.value;
                console.log(arrendatario__direccion.value);
            });

            arrendatario__distrito.addEventListener('keyup', () => {
                arrendatario__distrito__dato.innerHTML = arrendatario__distrito.value;
                console.log(arrendatario__distrito.value);
            });

            arrendatario__provincia.addEventListener('keyup', () => {
                arrendatario__provincia__dato.innerHTML = arrendatario__provincia.value;
                console.log(arrendatario__provincia.value);
            });

            arrendatario__departamento.addEventListener('keyup', () => {
                arrendatario__departamento__dato.innerHTML = arrendatario__departamento.value;
                console.log(arrendatario__departamento.value);
            });
        }


        if (propiedad__descripcion &&
            propiedad__ubicacion &&
            propiedad__distrito &&
            propiedad__provincia &&
            propiedad__departamento) {
            propiedad__descripcion.addEventListener('keyup', () => {
                propiedad__descripcion__dato.innerHTML = propiedad__descripcion.value;
                console.log(propiedad__descripcion.value);
            });

            propiedad__ubicacion.addEventListener('keyup', () => {
                propiedad__ubicacion__dato.innerHTML = propiedad__ubicacion.value;
                console.log(propiedad__ubicacion.value);
            });

            propiedad__distrito.addEventListener('keyup', () => {
                propiedad__distrito__dato.innerHTML = propiedad__distrito.value;
                console.log(propiedad__distrito.value);
            });

            propiedad__provincia.addEventListener('keyup', () => {
                propiedad__provincia__dato.innerHTML = propiedad__provincia.value;
                console.log(propiedad__provincia.value);
            });

            propiedad__departamento.addEventListener('keyup', () => {
                propiedad__departamento__dato.innerHTML = propiedad__departamento.value;
                console.log(propiedad__departamento.value);
            });
        }


        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        function fecha(a) {
            let date = new Date(a.value);
            let fechaNum = date.getUTCDate();
            let mes_name = date.getMonth();

            return (fechaNum + " de " + meses[mes_name] + " de " + date.getFullYear());
        }

        var contrato__fecha__inicio = document.getElementById('contrato__fecha__inicio');
        var contrato__fecha__inicio__dato = document.getElementById('contrato__fecha__inicio__dato');
        var contrato__fecha__fin = document.getElementById('contrato__fecha__fin');
        var contrato__fecha__fin__dato = document.getElementById('contrato__fecha__fin__dato');
        var contrato__fecha = document.getElementById('contrato__fecha');
        var contrato__fecha__dato = document.getElementById('contrato__fecha__dato');

        if (contrato__fecha__inicio) {
            contrato__fecha__inicio.addEventListener('onchange', () => {
                contrato__fecha__inicio__dato.innerHTML = fecha(contrato__fecha__inicio);
                console.log(contrato__fecha__inicio.value);
            });
            contrato__fecha__inicio.addEventListener('change', () => {
                contrato__fecha__inicio__dato.innerHTML = fecha(contrato__fecha__inicio);
            });
        }
        if (contrato__fecha__fin) {
            contrato__fecha__fin.addEventListener('onchange', () => {
                contrato__fecha__fin__dato.innerHTML = fecha(contrato__fecha__fin);
                console.log(contrato__fecha__fin.value);
            });
            contrato__fecha__fin.addEventListener('change', () => {
                contrato__fecha__fin__dato.innerHTML = fecha(contrato__fecha__fin);
            });
        }
        if (contrato__fecha) {
            contrato__fecha.addEventListener('onchange', () => {
                contrato__fecha__dato.innerHTML = fecha(contrato__fecha);
                console.log(contrato__fecha.value);
            });
            contrato__fecha.addEventListener('change', () => {
                contrato__fecha__dato.innerHTML = fecha(contrato__fecha);
            });
        }

        var contrato__alquiler = document.getElementById('contrato__alquiler');
        var contrato__alquiler__dato = document.getElementById('contrato__alquiler__dato');
        var contrato__alquiler__letras = document.getElementById('contrato__alquiler__letras');
        var contrato__alquiler__letras__dato = document.getElementById('contrato__alquiler__letras__dato');
        var contrato__garantia = document.getElementById('contrato__garantia');
        var contrato__garantia__dato = document.getElementById('contrato__garantia__dato');
        var contrato__garantia__letras = document.getElementById('contrato__garantia__letras');
        var contrato__garantia__letras__dato = document.getElementById('contrato__alquiler__letras__dato');

        if (contrato__alquiler && contrato__garantia) {
            contrato__alquiler.addEventListener('keyup', () => {
                contrato__alquiler__dato.innerHTML = contrato__alquiler.value;
                console.log(contrato__alquiler.value);
            });
            contrato__alquiler.addEventListener('change', () => {
                contrato__alquiler__dato.innerHTML = contrato__alquiler.value;
                console.log(contrato__alquiler.value);
            });
            contrato__garantia.addEventListener('keyup', () => {
                contrato__garantia__dato.innerHTML = contrato__garantia.value;
                console.log(contrato__garantia.value);
            });
            contrato__garantia.addEventListener('change', () => {
                contrato__garantia__dato.innerHTML = contrato__garantia.value;
                console.log(contrato__garantia.value);
            });
        }


        var inmueble__oficina = document.getElementById('inmueble__oficina');
        var inmueble__habitacion = document.getElementById('inmueble__habitacion');

        if (inmueble__oficina && inmueble__habitacion) {
            inmueble__oficina.addEventListener('click', () => {
                document.getElementById('showOficina_div').style.display = 'block';
                document.getElementById('showHabitacion_div').style.display = 'none';
                document.getElementById('segunda_oficina').style.display = 'block';
                document.getElementById('segunda_habitacion').style.display = 'none';
                document.getElementById('tercera_oficina').style.display = 'block';
                document.getElementById('tercera_habitacion').style.display = 'none';
            });
            inmueble__habitacion.addEventListener('click', () => {
                document.getElementById('showOficina_div').style.display = 'none';
                document.getElementById('showHabitacion_div').style.display = 'block';
                document.getElementById('segunda_oficina').style.display = 'none';
                document.getElementById('segunda_habitacion').style.display = 'block';
                document.getElementById('tercera_oficina').style.display = 'none';
                document.getElementById('tercera_habitacion').style.display = 'block';
            });
        }
        var inmueble__numero = document.getElementById('inmueble__numero');
        var inmueble__numero__dato = document.getElementById('inmueble__numero__dato');
        var inmueble__piso = document.getElementById('inmueble__piso');
        var inmueble__piso__dato = document.getElementById('inmueble__piso__dato');
        var inmueble__descripcion = document.getElementById('inmueble__descripcion');
        var inmueble__descripcion__dato = document.getElementById('inmueble__descripcion__dato');

        if (inmueble__numero && inmueble__piso) {
            inmueble__numero.addEventListener('keyup', () => {
                inmueble__numero__dato.innerHTML = inmueble__numero.value;
                console.log(inmueble__numero.value);
            });
            inmueble__numero.addEventListener('change', () => {
                inmueble__numero__dato.innerHTML = inmueble__numero.value;
                console.log(inmueble__numero.value);
            });
            inmueble__piso.addEventListener('keyup', () => {
                inmueble__piso__dato.innerHTML = inmueble__piso.value;
                console.log(inmueble__piso.value);
            });
            inmueble__piso.addEventListener('change', () => {
                inmueble__piso__dato.innerHTML = inmueble__piso.value;
                console.log(inmueble__piso.value);
            });
        }

        if (inmueble__descripcion) {
            inmueble__descripcion.addEventListener('keyup', () => {
                inmueble__descripcion__dato.innerHTML = inmueble__descripcion.value;
                console.log(inmueble__descripcion.value);
            });
        }

        var datos__arrendador = document.getElementById('datos__arrendador');

        if (datos__arrendador) {
            datos__arrendador.addEventListener('click', () => {
                arrendador__dni.value = "23845349";
                arrendador__nombre.value = "JUSTINO C.";
                arrendador__apellidos.value = "PEREDO QUISPE";
                arrendador__direccion.value = "TRES CRUCES DE ORO 223";
                arrendador__distrito.value = "CUSCO";
                arrendador__provincia.value = "CUSCO";
                arrendador__departamento.value = "CUSCO";

                arrendador__dni__dato.innerHTML = "23845349";
                arrendador__nombre__dato.innerHTML = "JUSTINO C.";
                arrendador__apellidos__dato.innerHTML = "PEREDO QUISPE";
                arrendador__direccion__dato.innerHTML = "TRES CRUCES DE ORO 223";
                arrendador__distrito__dato.innerHTML = "CUSCO";
                arrendador__provincia__dato.innerHTML = "CUSCO";
                arrendador__departamento__dato.innerHTML = "CUSCO";
            });
        }


        var datos__propiedad1 = document.getElementById('datos__propiedad1');

        if (datos__propiedad1) {
            datos__propiedad1.addEventListener('click', () => {
                propiedad__descripcion.value = "CINCO PISOS";
                propiedad__ubicacion.value = "TRES CRUCES DE ORO 223";
                propiedad__distrito.value = "CUSCO";
                propiedad__provincia.value = "CUSCO";
                propiedad__departamento.value = "CUSCO";

                propiedad__descripcion__dato.innerHTML = "CINCO PISOS";
                propiedad__ubicacion__dato.innerHTML = "TRES CRUCES DE ORO 223";
                propiedad__distrito__dato.innerHTML = "CUSCO";
                propiedad__provincia__dato.innerHTML = "CUSCO";
                propiedad__departamento__dato.innerHTML = "CUSCO";
            });
        }
    }

    return (
        <>
            <section className="m-3">
                <main className="datos">
                    <button type="button" className="m-1 btn btn-primary"><FontAwesomeIcon icon={faPrint} className="btn" onClick={() => window.print()} /></button>
                    <button type="button" className="m-1 btn btn-success" id="datos__arrendador">JUSTINO PEREDO</button>
                    <button type="button" className="m-1 btn btn-danger" id="datos__propiedad1">TRES CRUCES</button>
                    <button type="button" className="m-1 btn btn-danger" id="datos__propiedad2">LICENCIADOS</button>
                </main>
                <main>
                    <Row className="p-0">
                        <Col xs={12} sm={12} md={6} lg={6} xl={5} className="bg-dark text-light p-2 left">
                            <Form>
                                <Row className="m-0 p-0">
                                    <Col xs={12} sm={6} md={12} xl={6} className="m-0 p-1 bg-color1 border border-white">
                                        <fieldset>
                                            <legend>Arrendador</legend>

                                            <Form.Label className="mb-1" htmlFor="arrendador__dni">
                                                <span>DNI <span className="required">*: </span></span>
                                                <input className="" type="number" id="arrendador__dni" />
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="arrendador__nombre"><span>Nombre <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendador__nombre" />
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="arrendador__apellidos"><span>Apellidos <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendador__apellidos" />
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="arrendador__direccion"><span>Direccion <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendador__direccion" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendador__distrito"><span>Distrito <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendador__distrito" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendador__provincia"><span>Provincia <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendador__provincia" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendador__departamento"><span>Depto <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendador__departamento" />
                                            </Form.Label>
                                        </fieldset>
                                    </Col>

                                    <Col xs={12} sm={6} md={12} xl={6} className="m-0 p-1 bg-color2 border border-white">
                                        <fieldset>
                                            <legend>Arrendatario</legend>

                                            <Form.Label className="mb-1" htmlFor="arrendatario__dni"><span>DNI <span className="required">*: </span></span>
                                                <input type="number" className="" id="arrendatario__dni" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendatario__nombre"><span>Nombre <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendatario__nombre" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendatario__apellidos"><span>Apellidos <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendatario__apellidos" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendatario__dirección"><span>Direccion <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendatario__direccion" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendatario__distrito"><span>Distrito <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendatario__distrito" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendatario__provincia"><span>Provincia <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendatario__provincia" />
                                            </Form.Label>
                                            <Form.Label className="mb-1" htmlFor="arrendatario__departamento"><span>Depto <span className="required">*: </span></span>
                                                <input type="text" className="" id="arrendatario__departamento" />
                                            </Form.Label>
                                        </fieldset>
                                    </Col>
                                </Row>

                                <Row className="m-0 p-0">
                                    <Col xs={12} sm={6} md={12} xl={6} className="m-0 p-1 bg-color3 border border-white">
                                        <fieldset>
                                            <legend>Propiedad</legend>

                                            <Form.Label className="mb-1" htmlFor="propiedad__descripcion">
                                                <span>Descripción: </span>
                                                <input type="text" id="propiedad__descripcion" />
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="propiedad__ubicacion">
                                                <span>Ubicación*: </span>
                                                <input type="text" id="propiedad__ubicacion" />
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="propiedad__distrito"><span>Distrito <span className="required">*: </span></span>
                                                <input type="text" className="" id="propiedad__distrito" />
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="propiedad__provincia"><span>Provincia <span className="required">*: </span></span>
                                                <input type="text" className="" id="propiedad__provincia" />
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="propiedad__departamento"><span>Depto <span className="required">*: </span></span>
                                                <input type="text" className="" id="propiedad__departamento" />
                                            </Form.Label>
                                        </fieldset>
                                    </Col>
                                    <Col xs={12} sm={6} md={12} xl={6} className="m-0 p-1 bg-color4 border border-white">
                                        <fieldset>
                                            <legend>Inmueble</legend>

                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inmueble__oficina"
                                                value="option1"
                                            />
                                            OFICINA
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="inlineRadioOptions"
                                                id="inmueble__habitacion"
                                                value="option2"
                                            />
                                            HABITACIÓN

                                            <div id="showOficina_div" className="mb-1 hide">
                                                <span>Piso: </span>
                                                <input type="text" id="inmueble__piso" />
                                                <br />
                                                <span>Oficina N°: </span>
                                                <input type="number" id="inmueble__numero" />
                                            </div>
                                            <div id="showHabitacion_div" className="mb-1 hide">
                                                <span>Descripción: </span>
                                                <input type="text" id="inmueble__descripcion" />
                                            </div>

                                        </fieldset>
                                    </Col>
                                </Row>

                                <Row className="m-0 p-0">
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 p-1 bg-color5 border border-white">
                                        <fieldset>
                                            <legend>Contrato</legend>
                                            <Form.Label className="mb-1">
                                                <span>Fecha Inicio: </span>
                                                <input className="dia" type="date" id="contrato__fecha__inicio" />
                                            </Form.Label>

                                            <Form.Label className="mb-1">
                                                <span>Fecha Fin: </span>
                                                <input className="dia" type="date" id="contrato__fecha__fin" />
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="contrato__monto">
                                                <span>Monto de Alquiler*: </span>
                                                <input type="number" id="contrato__alquiler" />
                                                <small className="mb-1 text-info d-block" htmlFor="" id="contrato__alquiler__letras"></small>
                                            </Form.Label>

                                            <Form.Label className="mb-1" htmlFor="contrato__garantia">
                                                <span>Monto de Garantia*: </span>
                                                <input type="number" id="contrato__garantia" />
                                                <small className="mb-1 text-info d-block" htmlFor="" id="contrato__garantia__letras"></small>
                                            </Form.Label>
                                        </fieldset>
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12} className="m-0 p-1 bg-color6 border border-white">
                                        <fieldset>
                                            <legend>Firma de Contrato</legend>
                                            <Form.Label className="mb-1">
                                                <span>Fecha de Contrato: </span>
                                                <input className="dia" type="date" id="contrato__fecha" />
                                            </Form.Label>
                                        </fieldset>
                                    </Col>
                                </Row>
                                <Button type="submit" className="mt-3">IMPRIMIR</Button>
                            </Form>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={7} className="right">
                            <article className="imprimir">
                                <h1>CONTRATO DE ARRENDAMIENTO</h1>
                                <p>
                                    CONSTE POR EL PRESENTE DOCUMENTO DENOMINADO CONTRATO DE ARRENDAMIENTO, QUE CELEBRAN DE UNA PARTE
                                    <b> <span className="span1" id="arrendador__nombre__dato">NOMBRE</span> </b>
                                    <b> <span className="span1" id="arrendador__apellidos__dato">APELLIDOS</span> </b>
                                    IDENTIFICADO CON DNI N°
                                    <b> <span className="span1" id="arrendador__dni__dato">DNI</span></b>
                                    , CON DOMICILIO EN
                                    <b> <span className="span1" id="arrendador__direccion__dato">DOMICILIO</span> </b>
                                    DEL DISTRITO DE
                                    <b> <span className="span1" id="arrendador__distrito__dato">DISTRITO</span></b>
                                    , PROVINCIA DE
                                    <b> <span className="span1" id="arrendador__provincia__dato">PROVINCIA</span> </b>
                                    Y DEPARTAMENTO DE
                                    <b> <span className="span1" id="arrendador__departamento__dato">DEPARTAMENTO</span></b>
                                    , DE AQUI EN ADELANTE SE LE DENOMINARA <b>EL ARRENDADOR</b>; Y DE OTRA PARTE
                                    <b> <span className="span2" id="arrendatario__nombre__dato">NOMBRE</span> </b>
                                    <b> <span className="span2" id="arrendatario__apellidos__dato">APELLIDOS</span> </b>
                                    IDENTIFICADO CON DNI N°
                                    <b> <span className="span2" id="arrendatario__dni__dato">DNI</span></b>
                                    , CON DOMICILIO EN
                                    <b> <span className="span2" id="arrendatario__direccion__dato">DOMICILIO</span></b>
                                    DEL DISTRITO DE
                                    <b> <span className="span2" id="arrendatario__distrito__dato">DISTRITO</span></b>
                                    , PROVINCIA DE
                                    <b> <span className="span2" id="arrendatario__provincia__dato">PROVINCIA</span> </b>
                                    Y DEPARTAMENTO DE
                                    <b> <span className="span2" id="arrendatario__departamento__dato">DEPARTAMENTO</span> </b>
                                    A QUIEN EN ADELANTE SE LE DENOMINARA <b>EL ARRENDATARIO</b>, DE ACUERDO A LOS TÉRMINOS Y CONDICIONES SIGUIENTES:</p><p>
                                    <b>ANTECEDENTES</b></p><p>
                                    <b>PRIMERA. -</b> <b>EL ARRENDADOR</b> ES PROPIETARIO DEL INMUEBLE UBICADO EN
                                    <b> <span className="span3" id="propiedad__ubicacion__dato">UBICACIÓN</span> </b>
                                    DEL DISTRITO DE
                                    <b> <span className="span3" id="propiedad__distrito__dato">DISTRITO</span> </b>
                                    , PROVINCIA DE
                                    <b> <span className="span3" id="propiedad__provincia__dato">PROVINCIA</span> </b>
                                    Y DEPARTAMENTO DE
                                    <b> <span className="span3" id="propiedad__departamento__dato">DEPARTAMENTO</span> </b>
                                    , EL MISMO QUE SE ENCUENTRA INSCRITO EN EL REGISTRO DE PROPIEDAD INMUEBLE DE REGISTROS PÚBLICOS E DE CUSCO DEJANDOSE CONSTANCIA QUE ESTE INMUEBLE CONSTA DE
                                    <b> <span className="span3" id="propiedad__descripcion__dato">DESCRIPCIÓN</span>. </b>
                                </p>

                                <p className="hide" id="segunda_oficina">
                                    <b>SEGUNDA. -</b> <b>EL ARRENDADOR</b> DEJA CONSTANCIA QUE EN EL INTERIOR DEL
                                    <b> <span className="span4" id="inmueble__piso__dato">OFICINA</span> </b>
                                    PISO DEL INMUEBLE AL QUE SE REFIERE LA CLAUSULA ANTERIOR, SE ENCUENTRA DESOCUPADO LA OFICINA N°
                                    <b> <span className="span4" id="inmueble__numero__dato">OFICINA</span> </b>
                                    , ENCONTRANDOSE EN BUEN ESTADO DE CONSERVACIÓN.

                                </p>

                                <p className="" id="segunda_habitacion">
                                    <b>SEGUNDA. -</b> <b>EL ARRENDADOR</b> DEJA CONSTANCIA QUE <span className="span4" id="inmueble__descripcion__dato">DESCRIPCIÓN</span> AL QUE SE REFIERE LA CLAUSULA ANTERIOR, SE ENCUENTRA DESOCUPADO, ENCONTRANDOSE EN BUEN ESTADO DE CONSERVACIÓN.
                                </p>

                                <p>
                                    <b>OBJETO DEL CONTRATO:</b>
                                </p>

                                <p className="hide" id="tercera_oficina">
                                    <b>TERCERA. -</b> MEDIANTE EL PRESENTE CONTRATO <b>EL ARRENDADOR</b> DA EN ALQUILER AL ARRENDATARIO, EL AMBIENTE OFICINA N°
                                    <b> <span className="span4" id="inmueble__numero__dato">OFICINA</span> </b>
                                    DESCRITO EN LA CLAUSULA SEGUNDA PARA DESTINARLO UNICAMENTE PARA DEPOSITO, EL CUAL ES RECIBIDO EN PERFECTO ESTADO DE OPERATIVIDAD, CONFORME A SEÑALADO EN LA CLAUSULA SEGUNDA. POR SU PARTE, <b>EL ARRENDATARIO</b> SE OBLIGA A PAGAR A <b>EL ARRENDADOR</b> EL MONTO DE LA RENTA PACTADA EN LA CLAUSULA SIGUIENTE, EN LA FORMA Y OPORTUNIDAD CONVENIDAS.
                                    RENTA: FORMA Y OPORTUNIDAD DE PAGO:
                                </p>
                                <p className="" id="tercera_habitacion">
                                    <b>TERCERA. -</b> MEDIANTE EL PRESENTE CONTRATO <b>EL ARRENDADOR</b> DA EN ALQUILER AL ARRENDATARIO, EL AMBIENTE DESCRITO EN LA CLAUSULA SEGUNDA, EL CUAL ES RECIBIDO EN PERFECTO ESTADO DE OPERATIVIDAD, CONFORME A SEÑALADO EN LA CLAUSULA SEGUNDA. POR SU PARTE, LOS ARRENDATARIOS SE OBLIGA A PAGAR A <b>EL ARRENDADOR</b> EL MONTO DE LA RENTA PACTADA EN LA CLAUSULA SIGUIENTE, EN LA FORMA Y OPORTUNIDAD CONVENIDAS
                                </p>

                                <p><b>RENTA - FORMA Y OPORTUNIDAD DE PAGO:</b></p>

                                <p>
                                    <b>CUARTA. -</b> LAS PARTES ACUERDAN QUE EL MONTO DE LA MERCED CONDUCTIVA <b>EL ARRENDATARIO</b>, EN CALIDAD DE CONTRAPRESTACIÓN PAGARÁ LA SUMA DE
                                    <b> S/. <span className="span5" id="contrato__alquiler__dato">MONTO ALQUILER</span>.00 </b>
                                    <b>(<span className="span5" id="contrato__alquiler__letras__dato">MONTO ALQUILER LETRAS</span> CON 00/100 SOLES)</b>
                                    MENSUALES, CANTIDAD QUE SERÁ CANCELADA EN DINERO EFECTIVO, EN LA FORMA Y OPORTUNIDAD A QUE SE REFIERE LA CLAUSULA SIGUIENTE. ASIMISMO, LOS SERVICIOS BASICOS DE AGUA Y ENERGIA ELÉCTRICA ESTAN INCLUIDOS EN LA MERCED CONDUCTIVA. </p><p>
                                    <b>QUINTA. -</b> LA FORMA Y OPORTUNIDAD DE PAGO DE LA RENTA SERA ADELANTADA, DURANTE EL TIEMPO DE VIGENCIA DEL CONTRATO, QUE <b>EL ARRENDATARIO</b> PAGARÁ EN EL DOMICILIO DE <b>EL ARRENDADOR</b>, ES DECIR EN SU DOMICILIO UBICADO EN EL MISMO INMUEBLE DONDE QUEDAN LAS INDICADAS OFICINAS.</p>
                                <p>
                                    <b>PLAZO DEL CONTRATO:</b>
                                </p>

                                <p>
                                    <b>SEXTA. -</b> EL PLAZO DEL PRESENTE CONTRATO ES DE UN AÑO, EL CUAL REGIRA A PARTIR DEL
                                    <b> <span className="span5" id="contrato__fecha__inicio__dato">FECHA INICIO</span> </b>
                                    HASTA EL
                                    <b> <span className="span5" id="contrato__fecha__fin__dato">FECHA FIN</span> </b>
                                    , A CUYO VENCIMIENTO PODRÀ RENOVARSE CON EL ACUERDO DE AMBAS PARTES, PUDIENDO VARIAR LAS CONDICIONES ESTABLECIDAS EN EL PRESENTE CONTRATO, EN CUANTO AL PLAZO, MONTO DE LA RENTA Y USO DEL BIEN, CASO CONTRARIO <b>EL ARRENDATARIO</b> ESTÁ OBLIGADO A DESOCUPAR Y DEVOLVER EL BIEN ARRENDADO EN LAS MISMAS CONDICIONES QUE SE LE FUE ENTREGADO.
                                </p>
                            </article>
                            <article className="imprimir">
                                <p><b>OBLIGACIONES DE LAS PARTES:</b></p>
                                <p>
                                    <b>SETIMA. -</b> <b>EL ARRENDATARIO</b> QUEDA PROHIBIDA DE INTRODUCIR MEJORAS, CAMBIOS O MODIFICACIONES INTERNAS Y EXTERNAS EN EL BIEN ARRENDADO, SIN EL CONSENTIMIENTO EXPRESO Y POR ESCRITO DE <b>EL ARRENDADOR</b> TODAS LAS MEJORAS INCLUSIVE LAS DE RECREO, SERÁN DE BENEFICIO DE <b>EL ARRENDADOR</b>, SIN OBLIGACIÓN DE PAGO ALGUNO. 	</p><p>
                                    <b>OCTAVA. -</b> <b>EL ARRENDATARIO</b> NO PODRÁ CEDER A TERCEROS LAS OFICINAS MATERIA DEL PRESENTE CONTRATO BAJO NINGÚN TÍTULO, NI SUBARRENDARLO, TOTAL O PARCIALMENTE, NI CEDER SU POSICION CONTRACTUAL, SALVO QUE CUENTE CON EL CONSENTIMIENTO EXPRESO Y POR ESCRITO DE <b>EL ARRENDADOR</b>, EN CUYO CASO SE SUSCRIBIRAN LOS DOCUMENTOS QUE FUEREN NECESARIOS. </p><p>
                                    <b>NOVENA. -</b> <b>EL ARRENDATARIO</b> SE OBLIGA A DESOCUPAR EL BIEN ARRENDADO EN LA FECHA DE VENCIMIENTO DEL PLAZO ESTIPULADO EN LA CLÁUSULA SEXTA DE ESTE CONTRATO, SALVO RENOVACIÓN DEL MISMO. 	</p><p>
                                    <b>CLAUSULA DE GARANTÍA:</b></p><p>
                                    <b>DECIMO. -</b> EN FECHA DE SUSCRIPCIÓN DEL PRESENTE DOCUMENTO <b>EL ARRENDATARIO</b> ENTREGA A <b>EL ARRENDADOR</b> LA SUMA DE
                                    <b> S/. <span className="span5" id="contrato__garantia__dato">MONTO GARANTÍA</span>.00 </b>
                                    <b>(<span className="span5" id="contrato__garantia__letras__dato">MONTO GARANTÍA LETRAS</span> CON 00/100 SOLES)</b>
                                    EN CALIDAD DE GARANTIA POR EL CONTRATO DE ALQUILER. EL MENCIONADO DEPÓSITO EN GARANTIA LE SERÁ DEVUELTO AL ARRENDATARIO SIN INTERESES O RENTAS, AL VENCIMIENTO DEL PRESENTE CONTRATO, SIEMPRE QUE NO HAYA SIDO RENOVADO, Y UNA VEZ VERIFICADO EL ESTADO DE CONSERVACIÓN Y FUNCIONAMIENTO DEL BIEN ARRENDADO. LAS PARTES DEJAN ESTABLECIDO QUE EL DEPOSITO EN GARANTIA, NO PODRÁ SER DESTINADO A CUBRIR EL PAGO DE LA RENTA DE NINGUN PERÍODO,
                                    CLAUSULA DE SOLUCION DE CONFLICTOS:</p><p>
                                    <b>DECIMO PRIMERA. -</b> AMBAS PARTES ACUERDAN DE MANERA VOLUNTARIAS QUE TODA DESAVENENCIA, LITIGIO O CONTROVERSIA QUE PUDIERA DERIVARSE DE ESTE CONTRATO CONVENIO O ACTO JURIDICO, INCLUIDAS LAS DE SU NULIDAD O INVALIDEZ, SERÁN RESUELTAS A TRAVES DE CENTROS DE CONCILIACIÓN Y A LA JURISDICCION DE LOS JUECES DE LA CIUDAD DE CUSCO.</p><p>
                                    <b>DECIMO SEGUNDA. -</b> EN CASO QUE <b>EL ARRENDATARIO</b> MANTENGA UNA DEUDA DE TRES (03) MESES, O TENGA CONTRATO VENCIDO, SERA DESALOJADO DE ACUERDO A LEYES VIGENTES, EN SEÑAL DE CONFORMIDAD LAS PARTES SUSCRIBEN EL PRESENTE CONTRATO EN LA CIUDAD DE CUSCO, AL
                                    <b> <span className="span6" id="contrato__fecha__dato">FECHA CONTRATO</span> </b>.
                                </p>
                            </article>
                        </Col>
                    </Row>

                </main>

            </section>
        </>

    );
}
