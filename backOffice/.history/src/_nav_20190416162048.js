export default {
  items: [
    {
      title: true,
      name: "Utilizadores"
    },
    {
      name: "Administrador",
      url: "/theme/colors",
      icon: "icon-user",
      children: [
        {
          name: "Listar",
          url: "/base/tables",
          icon: "icon-people"
        },
        {
          name: "Validar",
          url: "/base/tables",
          icon: "icon-user-follow"
        }
      ]
    },
    {
      name: "Cliente",
      url: "/base/tables",
      icon: "icon-user",
      children: [
        {
          name: "Listar",
          url: "/base/tables",
          icon: "icon-people"
        },
        {
          name: "Validar",
          url: "/base/tables",
          icon: "icon-user-follow"
        }
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: "Watersurance"
    },
    {
      name: "Ocorrencias",
      url: "/theme/colors",
      icon: "icon-tag",
      children: [
        {
          name: "Listar",
          url: "/base/breadcrumbs",
          icon: "icon-arrow-right"
        },
        {
          name: "Submeter",
          url: "/base/cards",
          icon: "icon-arrow-right"
        }
      ]
    },
    {
      name: "Contratos",
      url: "/buttons",
      icon: "icon-notebook",
      children: [
        {
          name: "Listar",
          url: "/buttons/buttons",
          icon: "icon-arrow-right"
        },
        {
          name: "Terminados",
          url: "/buttons/button-dropdowns",
          icon: "icon-arrow-right"
        }
      ]
    },
    {
      divider: true
    },
    {
      title: true,
      name: "Extras"
    },
    {
      name: "Pages",
      url: "/pages",
      icon: "icon-star",
      children: [
        {
          name: "Login",
          url: "/login",
          icon: "icon-star"
        },
        {
          name: "Register",
          url: "/register",
          icon: "icon-star"
        },
        {
          name: "Error 404",
          url: "/404",
          icon: "icon-star"
        },
        {
          name: "Error 500",
          url: "/500",
          icon: "icon-star"
        }
      ]
    }
  ]
};
