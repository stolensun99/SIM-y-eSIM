/**
 * Idioma global del portal (controlado desde Configuración → select #languageSelect).
 * localStorage key: "lang" — valores "es" | "en"
 */
(function () {
    "use strict";

    var STORAGE_KEY = "lang";

    var translations = {
        es: {
            doc_title_home: "Portal SIM/eSIM UACJ",
            doc_title_network: "Estado de Red - UACJ",
            doc_title_request_hub: "Solicitar SIM | Portal SIM/eSIM UACJ",
            doc_title_support: "Soporte Técnico - Portal SIM/eSIM UACJ",
            doc_title_config: "Configuración - Portal SIM/eSIM UACJ",
            doc_title_esim_form: "Solicitar eSIM | Portal SIM/eSIM UACJ",
            doc_title_phys_form: "Solicitar SIM física | Portal SIM/eSIM UACJ",

            portal_brand: "Portal SIM/eSIM UACJ",
            ms_search: "🔍 Buscar",
            nav_home: "Inicio",
            nav_network: "Estado de red",
            nav_request_sim: "Solicitar SIM",
            nav_support: "Soporte técnico",
            nav_settings: "Configuración",

            menu_banner_h1: "Portal SIM/eSIM UACJ",
            menu_banner_p:
                "Sistema institucional de conectividad universitaria diseñado para brindar acceso móvil seguro y accesible a estudiantes mediante tecnologías SIM y eSIM.",
            menu_h2_what: "¿Qué es el Portal SIM/eSIM?",
            menu_large_h3: "Conectividad académica para estudiantes",
            menu_large_p1:
                "El Portal SIM/eSIM UACJ es una plataforma institucional enfocada en proporcionar servicios móviles universitarios a estudiantes mediante líneas SIM físicas y eSIM digitales.",
            menu_large_p2:
                "A través de este sistema, los alumnos podrán consultar el estado de su red, monitorear el consumo de datos, solicitar nuevas líneas universitarias y acceder a soporte técnico especializado desde cualquier dispositivo.",
            menu_large_p3:
                "La plataforma busca mejorar la conectividad académica dentro y fuera del campus, facilitando el acceso a recursos educativos digitales mediante una experiencia moderna, rápida y completamente integrada con los servicios universitarios.",
            menu_side_h3: "Servicios disponibles",
            menu_li_network: "Estado de red y consumo",
            menu_li_request: "Solicitud de SIM/eSIM",
            menu_li_support: "Soporte técnico",
            menu_li_settings: "Configuración",

            net_banner_h1: "Estado de red",
            net_banner_p: "Consulta el estado de tu SIM/eSIM universitaria y consumo de datos móviles.",
            net_section_h2: "Información de conectividad",
            net_card_type: "Tipo de línea",
            net_card_state: "Estado",
            net_card_remaining: "Datos restantes",
            net_card_usage: "Consumo",
            net_usage_h3: "Uso de datos",
            net_status_ok: "Red funcionando correctamente",
            net_academic_h3: "Datos académicos",
            net_li_1: "<b>Nombre:</b> Estudiante UACJ",
            net_li_2: "<b>Matrícula:</b> 000000",
            net_li_3: "<b>Carrera:</b> Ingeniería",
            net_li_4: "<b>Semestre: 5to</b>",
            net_val_esim: "eSIM",
            net_val_active: "Activa",
            net_val_gb: "18 GB",
            net_val_pct: "72%",
            net_th_date: "Fecha",
            net_th_time: "Horario",
            net_th_location: "Ubicación",

            hub_banner_h1: "Solicitar SIM/eSIM",
            hub_banner_p:
                "Completa el siguiente formulario institucional para solicitar una nueva línea SIM física o eSIM universitaria.",
            hub_sel_title: "Selecciona el tipo de solicitud",
            hub_sel_sub: "Elige si deseas solicitar una SIM física o una eSIM institucional.",
            hub_phys_title: "SIM Física",
            hub_phys_p: "Recibe una tarjeta SIM universitaria física para conectividad móvil institucional.",
            hub_phys_btn: "Solicitar SIM",
            hub_esim_title: "eSIM Digital",
            hub_esim_p: "Activa una eSIM directamente desde tu dispositivo compatible.",
            hub_esim_btn: "Solicitar eSIM",
            hub_mig_title: "Migrar",
            hub_mig_p: "Solicita una eSIM en caso de que tengas SIM",
            hub_mig_btn: "Migrar de SIM a eSIM",
            hub_wait_title: "Tiempo estimado de espera",
            hub_wait_counter: "días hábiles aproximados",
            hub_schedule_title: "Fechas de entrega de SIM físicas",

            sup_top_title: "Soporte Técnico",
            sup_faq_h1: "Preguntas frecuentes",
            sup_link_adv: "Ir a soporte avanzado →",
            sup_faq1_q: "¿Cómo solicito una SIM o eSIM?",
            sup_faq1_a:
                "Puedes realizar la solicitud desde el apartado “Solicitar SIM” dentro del portal institucional. Ahí podrás elegir entre SIM física o eSIM digital dependiendo de tu dispositivo.",
            sup_faq2_q: "¿Cómo reviso mi consumo de datos?",
            sup_faq2_a:
                "Ingresa al módulo “Estado de red” para visualizar el uso de datos móviles, consumo mensual y estado actual de tu línea universitaria.",
            sup_faq3_q: "Mi eSIM no se activa correctamente",
            sup_faq3_a:
                "Verifica que tu dispositivo sea compatible con eSIM y que tengas conexión a internet al momento de la activación. Si el problema continúa, contacta al área de soporte técnico.",
            sup_faq4_q: "¿Qué hago si no tengo señal?",
            sup_faq4_a:
                "Reinicia tu dispositivo y asegúrate de que la línea esté activa dentro del sistema. También puedes consultar el estado de la red desde el portal para verificar incidencias.",
            sup_faq5_q: "¿Cómo cambio de SIM física a eSIM?",
            sup_faq5_a:
                "Desde la sección de configuración podrás solicitar la migración de tu línea institucional hacia eSIM si tu teléfono cuenta con compatibilidad.",
            sup_faq6_q: "¿Dónde consulto la configuración APN?",
            sup_faq6_a:
                'En el portal abre <a href="Configuracion.html">Configuración</a> (icono de engrane en el menú superior). En esa página verás la tarjeta <strong>Configuración APN</strong>: el botón <strong>Consultar información</strong> enlaza a la guía de parámetros APN. Todo el acceso desde el portal pasa primero por Configuración.',
            sup_faq7_q: "¿Dónde reviso la compatibilidad eSIM?",
            sup_faq7_a:
                'También desde <a href="Configuracion.html">Configuración</a>: en la misma pantalla encontrarás la tarjeta <strong>Compatibilidad eSIM</strong>. El botón <strong>Consultar</strong> abre el listado de dispositivos compatibles. APN y eSIM son dos tarjetas distintas dentro de Configuración.',
            sup_info_strong: "Soporte técnico institucional",
            sup_info_p1:
                "Si presentas problemas durante la activación de tu SIM o eSIM institucional, puedes comunicarte con el área de soporte tecnológico UACJ.",
            sup_info_hours_lbl: "Horario de atención:",
            sup_info_hours_val: "Lunes a viernes de 8:00 AM a 6:00 PM",
            sup_info_mail_lbl: "Correo:",
            sup_info_footer:
                "También puedes acudir directamente al módulo de atención tecnológica de tu campus universitario.",

            form_back: "← Regresar",
            form_esim_banner_h1: "Solicitar eSIM",
            form_esim_banner_p:
                "Completa el siguiente formulario institucional para solicitar tu eSIM universitaria.",
            form_phys_banner_h1: "Solicitar SIM",
            form_phys_banner_p:
                "Completa el siguiente formulario institucional para solicitar una nueva línea SIM física o eSIM universitaria.",
            form_h1_personal: "Datos personales",
            form_esim_intro: "Completa la siguiente información para solicitar tu eSIM institucional UACJ.",
            form_phys_intro: "Completa la siguiente información para solicitar tu SIM institucional UACJ.",
            form_sec_student: "Información del estudiante",
            form_sec_esim: "Activación de eSIM",
            form_sec_extra: "Información adicional",
            form_lbl_fullname: "Nombre completo",
            form_lbl_id: "Matrícula",
            form_lbl_email: "Correo institucional",
            form_lbl_phone: "Número telefónico",
            form_lbl_institute: "Instituto",
            form_lbl_semester: "Semestre",
            form_lbl_campus: "Campus",
            form_lbl_device: "Modelo de dispositivo",
            form_lbl_reason: "Motivo de solicitud",
            form_ph_fullname: "Ingresa tu nombre completo",
            form_ph_id: "Ej. 202312345",
            form_ph_email: "alumno@uacj.mx",
            form_ph_phone: "6561234567",
            form_ph_device: "Ej. iPhone 15, Samsung S24, etc.",
            form_ph_reason: "Describe brevemente para qué necesitas la SIM institucional...",
            form_sel_pick: "Selecciona una opción",
            form_status_lbl: "Estado de solicitud:",
            form_esim_info_box:
                "<strong>Estado de solicitud:</strong><br><br>Tu eSIM institucional se encuentra en proceso de validación y entrega.<br><br>El tiempo estimado de activación es de <strong>5 días hábiles</strong>, sin contar sábados ni domingos.<br><br>Recibirás una notificación cuando tu eSIM esté lista para activarse.",
            form_esim_qr_title: "Tu eSIM ya está disponible",
            form_esim_qr_p:
                "Tu activación eSIM ya puede realizarse. Presiona el siguiente botón para abrir el código QR institucional y configurar tu línea móvil.",
            form_esim_qr_btn: "Abrir código QR eSIM",
            form_submit: "Enviar solicitud",
            form_lbl_device_ok: "¿Tu dispositivo es compatible?",
            form_lbl_pickup_date: "Fecha disponible para recoger tu SIM",
            form_pick_date_opt: "Selecciona una fecha",
            phys_delivery_title: "Disponibilidad de entrega",
            phys_th_avail: "Disponibilidad",
            phys_th_state: "Estado",

            banner_title: "Solicitar eSIM",
            banner_subtitle:
                "Completa el siguiente formulario institucional para solicitar tu eSIM universitaria.",
            service_title: "Configuración del servicio",
            service_subtitle:
                "Administra opciones básicas relacionadas con tu línea SIM/eSIM universitaria y consulta accesos rápidos para dispositivos móviles.",
            service_notice:
                "Algunas configuraciones avanzadas solamente están disponibles desde dispositivos móviles. Si ingresas desde celular podrás acceder a botones directos hacia configuraciones del sistema.",
            card_line_title: "Estado de línea",
            card_line_text:
                "Consulta si tu línea institucional se encuentra activa y correctamente registrada dentro del sistema universitario.",
            card_line_btn: "Ver estado",
            card_apn_title: "Configuración APN",
            card_apn_text:
                "Revisa la información necesaria para configurar correctamente la conexión de datos móviles institucional.",
            card_apn_btn: "Consultar información",
            card_esim_title: "Compatibilidad eSIM",
            card_esim_text:
                "Consulta una lista de dispositivos compatibles con eSIM antes de solicitar tu línea digital.",
            card_esim_btn: "Consultar",
            card_migrate_title: "Cambio de SIM a eSIM",
            card_migrate_text:
                "Aprende cómo solicitar la migración de una SIM física hacia una eSIM digital institucional.",
            card_migrate_btn: "Ver instrucciones",
            guide_step_1: "1. Ingresa al apartado <b>“Solicitar SIM”</b> dentro del portal.",
            guide_step_2: "2. Selecciona la opción <b>“Migrar a eSIM”</b>.",
            guide_step_3: "3. Verifica que tu teléfono sea compatible con tecnología eSIM.",
            guide_step_4:
                "4. Llena la solicitud para tu nueva eSIM (datos personales) y revisa el estado de activación de tu nueva eSIM.",
            guide_step_5: "5. Escanea el código QR desde la configuración móvil de tu dispositivo.",
            section_customize: "Personalización",
            theme_label: "Tema",
            theme_desc: "Selecciona la apariencia visual del portal institucional.",
            theme_light: "Tema claro",
            theme_dark: "Tema oscuro",
            lang_label: "Idioma",
            lang_desc: "Cambia el idioma principal del portal.",
            lang_option_es: "Español",
            lang_option_en: "English",
            mobile_title: "Configuración rápida móvil",
            mobile_sub: "Accesos rápidos disponibles para dispositivos móviles.",
            mobile_btn_sim: "Abrir configuración SIM",
            mobile_btn_data: "Abrir datos móviles",
            mobile_btn_network: "Abrir redes móviles",
            mobile_btn_settings: "Abrir ajustes del teléfono"
        },
        en: {
            doc_title_home: "SIM/eSIM Portal UACJ",
            doc_title_network: "Network status - UACJ",
            doc_title_request_hub: "Request SIM | SIM/eSIM Portal UACJ",
            doc_title_support: "Technical support - SIM/eSIM Portal UACJ",
            doc_title_config: "Settings - SIM/eSIM Portal UACJ",
            doc_title_esim_form: "Request eSIM | SIM/eSIM Portal UACJ",
            doc_title_phys_form: "Request physical SIM | SIM/eSIM Portal UACJ",

            portal_brand: "SIM/eSIM Portal UACJ",
            ms_search: "🔍 Search",
            nav_home: "Home",
            nav_network: "Network status",
            nav_request_sim: "Request SIM",
            nav_support: "Technical support",
            nav_settings: "Settings",

            menu_banner_h1: "SIM/eSIM Portal UACJ",
            menu_banner_p:
                "University connectivity system designed to give students secure, accessible mobile access through SIM and eSIM technologies.",
            menu_h2_what: "What is the SIM/eSIM Portal?",
            menu_large_h3: "Academic connectivity for students",
            menu_large_p1:
                "The UACJ SIM/eSIM Portal is an institutional platform focused on providing university mobile services through physical SIM and digital eSIM lines.",
            menu_large_p2:
                "Through this system, students can check network status, monitor data usage, request new university lines, and access specialized technical support from any device.",
            menu_large_p3:
                "The platform aims to improve academic connectivity on and off campus, making it easier to access digital learning resources with a modern, fast experience integrated with university services.",
            menu_side_h3: "Available services",
            menu_li_network: "Network status and usage",
            menu_li_request: "SIM/eSIM request",
            menu_li_support: "Technical support",
            menu_li_settings: "Configuration",

            net_banner_h1: "Network status",
            net_banner_p: "Check your university SIM/eSIM status and mobile data usage.",
            net_section_h2: "Connectivity information",
            net_card_type: "Line type",
            net_card_state: "Status",
            net_card_remaining: "Data remaining",
            net_card_usage: "Usage",
            net_usage_h3: "Data usage",
            net_status_ok: "Network is working correctly",
            net_academic_h3: "Academic data",
            net_li_1: "<b>Name:</b> UACJ student",
            net_li_2: "<b>Student ID:</b> 000000",
            net_li_3: "<b>Program:</b> Engineering",
            net_li_4: "<b>Semester: 5th</b>",
            net_val_esim: "eSIM",
            net_val_active: "Active",
            net_val_gb: "18 GB",
            net_val_pct: "72%",
            net_th_date: "Date",
            net_th_time: "Hours",
            net_th_location: "Location",

            hub_banner_h1: "Request SIM/eSIM",
            hub_banner_p:
                "Fill out the institutional form to request a new university physical SIM or eSIM line.",
            hub_sel_title: "Choose request type",
            hub_sel_sub: "Select whether you want a physical SIM or an institutional eSIM.",
            hub_phys_title: "Physical SIM",
            hub_phys_p: "Receive a physical university SIM card for institutional mobile connectivity.",
            hub_phys_btn: "Request SIM",
            hub_esim_title: "Digital eSIM",
            hub_esim_p: "Activate an eSIM directly on a compatible device.",
            hub_esim_btn: "Request eSIM",
            hub_mig_title: "Migrate",
            hub_mig_p: "Request an eSIM if you already have a SIM",
            hub_mig_btn: "Migrate from SIM to eSIM",
            hub_wait_title: "Estimated wait time",
            hub_wait_counter: "approx. business days",
            hub_schedule_title: "Physical SIM pickup dates",

            sup_top_title: "Technical support",
            sup_faq_h1: "Frequently asked questions",
            sup_link_adv: "Go to advanced support →",
            sup_faq1_q: "How do I request a SIM or eSIM?",
            sup_faq1_a:
                "You can submit a request from “Request SIM” in the institutional portal. There you can choose physical SIM or digital eSIM depending on your device.",
            sup_faq2_q: "How do I check my data usage?",
            sup_faq2_a:
                "Open “Network status” to see mobile data usage, monthly consumption, and the current state of your university line.",
            sup_faq3_q: "My eSIM does not activate correctly",
            sup_faq3_a:
                "Make sure your device supports eSIM and that you have internet access during activation. If the issue continues, contact technical support.",
            sup_faq4_q: "What if I have no signal?",
            sup_faq4_a:
                "Restart your device and confirm the line is active in the system. You can also check network status in the portal for incidents.",
            sup_faq5_q: "How do I switch from physical SIM to eSIM?",
            sup_faq5_a:
                "From Settings you can request migration to eSIM if your phone is compatible.",
            sup_faq6_q: "Where do I check APN settings?",
            sup_faq6_a:
                'Open <a href="Configuracion.html">Settings</a> from the top menu (gear icon). On that page, find the <strong>APN settings</strong> card: the <strong>View information</strong> button links to the APN parameter guide. The portal route always starts from Settings.',
            sup_faq7_q: "Where do I check eSIM compatibility?",
            sup_faq7_a:
                'Also under <a href="Configuracion.html">Settings</a>: on the same page you will see the <strong>eSIM compatibility</strong> card. The <strong>Check</strong> button opens the compatible devices list. APN and eSIM are two separate cards within Settings.',
            sup_info_strong: "Institutional technical support",
            sup_info_p1:
                "If you have problems activating your institutional SIM or eSIM, contact the UACJ technology support area.",
            sup_info_hours_lbl: "Service hours:",
            sup_info_hours_val: "Monday to Friday, 8:00 AM to 6:00 PM",
            sup_info_mail_lbl: "Email:",
            sup_info_footer:
                "You can also visit the technology help desk at your university campus.",

            form_back: "← Back",
            form_esim_banner_h1: "Request eSIM",
            form_esim_banner_p: "Fill out the institutional form to request your university eSIM.",
            form_phys_banner_h1: "Request SIM",
            form_phys_banner_p:
                "Fill out the institutional form to request a new university physical SIM or eSIM line.",
            form_h1_personal: "Personal details",
            form_esim_intro: "Complete the following information to request your institutional UACJ eSIM.",
            form_phys_intro: "Complete the following information to request your institutional UACJ SIM.",
            form_sec_student: "Student information",
            form_sec_esim: "eSIM activation",
            form_sec_extra: "Additional information",
            form_lbl_fullname: "Full name",
            form_lbl_id: "Student ID",
            form_lbl_email: "Institutional email",
            form_lbl_phone: "Phone number",
            form_lbl_institute: "Institute",
            form_lbl_semester: "Semester",
            form_lbl_campus: "Campus",
            form_lbl_device: "Device model",
            form_lbl_reason: "Reason for request",
            form_ph_fullname: "Enter your full name",
            form_ph_id: "e.g. 202312345",
            form_ph_email: "student@uacj.mx",
            form_ph_phone: "6561234567",
            form_ph_device: "e.g. iPhone 15, Samsung S24, etc.",
            form_ph_reason: "Briefly describe why you need the institutional SIM...",
            form_sel_pick: "Select an option",
            form_status_lbl: "Request status:",
            form_esim_info_box:
                "<strong>Request status:</strong><br><br>Your institutional eSIM is being validated and processed.<br><br>Estimated activation time is <strong>5 business days</strong>, excluding weekends.<br><br>You will be notified when your eSIM is ready to activate.",
            form_esim_qr_title: "Your eSIM is available",
            form_esim_qr_p:
                "You can complete eSIM activation. Use the button below to open the institutional QR code and set up your mobile line.",
            form_esim_qr_btn: "Open eSIM QR code",
            form_submit: "Submit request",
            form_lbl_device_ok: "Is your device compatible?",
            form_lbl_pickup_date: "Available date to pick up your SIM",
            form_pick_date_opt: "Select a date",
            phys_delivery_title: "Pickup availability",
            phys_th_avail: "Availability",
            phys_th_state: "Status",

            banner_title: "Request eSIM",
            banner_subtitle: "Fill out the institutional form to request your university eSIM.",
            service_title: "Service configuration",
            service_subtitle:
                "Manage basic SIM/eSIM university line settings and quick mobile access options.",
            service_notice:
                "Some advanced settings are only available on mobile devices. If you visit from your phone, you can open direct shortcuts to system settings.",
            card_line_title: "Line status",
            card_line_text:
                "Check if your institutional line is active and registered correctly in the university system.",
            card_line_btn: "View status",
            card_apn_title: "APN settings",
            card_apn_text: "Review the information needed to configure institutional mobile data correctly.",
            card_apn_btn: "View information",
            card_esim_title: "eSIM compatibility",
            card_esim_text:
                "See a list of eSIM-compatible devices before requesting your digital line.",
            card_esim_btn: "Check",
            card_migrate_title: "SIM to eSIM change",
            card_migrate_text:
                "Learn how to request migration from a physical SIM to an institutional digital eSIM.",
            card_migrate_btn: "View instructions",
            guide_step_1: "1. Open <b>“Request SIM”</b> in the portal.",
            guide_step_2: "2. Select <b>“Migrate to eSIM”</b>.",
            guide_step_3: "3. Make sure your phone supports eSIM.",
            guide_step_4:
                "4. Complete the request for your new eSIM (personal data) and check the activation status.",
            guide_step_5: "5. Scan the QR code from your device’s mobile settings.",
            section_customize: "Customization",
            theme_label: "Theme",
            theme_desc: "Select the visual appearance of the institutional portal.",
            theme_light: "Light theme",
            theme_dark: "Dark theme",
            lang_label: "Language",
            lang_desc: "Change the main portal language.",
            lang_option_es: "Spanish",
            lang_option_en: "English",
            mobile_title: "Quick mobile settings",
            mobile_sub: "Shortcuts available on mobile devices.",
            mobile_btn_sim: "Open SIM settings",
            mobile_btn_data: "Open mobile data",
            mobile_btn_network: "Open mobile networks",
            mobile_btn_settings: "Open phone settings"
        }
    };

    function translatePage(lang) {
        var dict = translations[lang] || translations.es;
        document.documentElement.lang = lang === "en" ? "en" : "es";

        var body = document.body;
        var titleKey = body && body.getAttribute("data-portal-title-key");
        if (titleKey && dict[titleKey] !== undefined) {
            document.title = dict[titleKey];
        }

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (!key || dict[key] === undefined) return;
            if (el.getAttribute("data-i18n-html") === "true") {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var pk = el.getAttribute("data-i18n-placeholder");
            if (pk && dict[pk] !== undefined) {
                el.setAttribute("placeholder", dict[pk]);
            }
        });

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {}
    }

    function initPortalI18n() {
        var savedLang = "es";
        try {
            savedLang = localStorage.getItem(STORAGE_KEY) || "es";
        } catch (e) {}
        translatePage(savedLang);
        var select = document.getElementById("languageSelect");
        if (select) {
            select.value = savedLang;
            select.addEventListener("change", function (e) {
                translatePage(e.target.value);
            });
        }
    }

    document.addEventListener("DOMContentLoaded", initPortalI18n);

    window.PortalI18n = {
        translatePage: translatePage,
        init: initPortalI18n,
        translations: translations
    };
})();
