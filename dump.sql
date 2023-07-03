--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: characters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.characters (
    id integer NOT NULL,
    name text NOT NULL,
    anime text NOT NULL,
    role text NOT NULL,
    status text NOT NULL
);


--
-- Name: characters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: characters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;


--
-- Name: people; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.people (
    id integer NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL
);


--
-- Name: people_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.people_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: people_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.people_id_seq OWNED BY public.people.id;


--
-- Name: characters id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);


--
-- Name: people id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.people ALTER COLUMN id SET DEFAULT nextval('public.people_id_seq'::regclass);


--
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.characters VALUES (3, 'Muichiro Tokito', 'Demon Slayer', 'Side Character', 'DECEASED');
INSERT INTO public.characters VALUES (4, 'Yuichiro Tokito', 'Demon Slayer', 'Side Character', 'DECEASED');
INSERT INTO public.characters VALUES (5, 'Nezuko Kamado', 'Demon Slayer', 'Main Character', 'ALIVE');
INSERT INTO public.characters VALUES (6, 'Giyuu Tomioka', 'Demon Slayer', 'Side Character', 'ALIVE');


--
-- Data for Name: people; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.people VALUES (1, 'Diego', 'Pinho');
INSERT INTO public.people VALUES (2, 'Letícia', 'Chijo');
INSERT INTO public.people VALUES (3, 'Thiago', 'Rosa');
INSERT INTO public.people VALUES (4, 'Maria', 'Fernanda');
INSERT INTO public.people VALUES (5, 'Diego', 'Pinho');
INSERT INTO public.people VALUES (6, 'Letícia', 'Chijo');
INSERT INTO public.people VALUES (7, 'Thiago', 'Rosa');
INSERT INTO public.people VALUES (8, 'Maria', 'Fernanda');


--
-- Name: characters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.characters_id_seq', 13, true);


--
-- Name: people_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.people_id_seq', 8, true);


--
-- Name: characters characters_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_name_key UNIQUE (name);


--
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


--
-- Name: people people_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.people
    ADD CONSTRAINT people_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

