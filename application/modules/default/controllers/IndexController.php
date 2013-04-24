<?php

class Default_IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
        Zend_Layout::startMvc(array('layout' => 'templatebase'));
        $layout = Zend_Layout::getMvcInstance();
        // echo "<br>TEMPLATE LAYOUT IS = {{$layout->getLayout()}}";



        $this->view = new Zend_View();
        // -- 01 HTM BASIC
        $this->view->doctype('XHTML1_STRICT');
        $this->view->headTitle('SISTEMA BANCARIO')->setSeparator(' :: ');
        // -- 02 META TAGS
        $this->view->headMeta()->appendHttpEquiv('Content-type','text/html;charset=utf-8');
        $this->view->headMeta()->appendName('keywords', 'ZEND, SENCHA');
        $this->view->headMeta()->appendName('author', 'Infinity24');
        // -- 03 LIBRERIA Ext.js
        $this->view->headLink()->appendStylesheet($this->view->baseUrl().'/Extjs/ext-4.2.0/resources/css/ext-all.css');
        $this->view->headScript()->appendFile('/Extjs/ext-4.2.0/ext-all-debug.js','text/javascript');      
        // -- 04 LIBRERIA JQuery
        $this->view->headScript()->appendFile('/assets/js/jquery-1.9.0.js','text/javascript');  




        
    }


}

