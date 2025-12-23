var simplemaps_countrymap_mapdata = {
  main_settings: {
    // Layout & performance
    width: "responsive",
    height: 600, // keep it inside container
    background_color: "#0f172a", // or your section bg if needed
    background_transparent: "yes",
    div: "map",
    auto_load: "no", // manual load from React to avoid blocking initial render

    // Borders & base colors (blue/white tone)
    border_color: "#0f172a",
    border_size: 1.2,
    state_color: "#e5f0ff", // light blue
    state_hover_color: "#2563eb", // primary blue
    state_description: "",
    pop_ups: "detect",

    // Interactivity
    all_states_inactive: "no",
    all_states_zoomable: "no",

    // Locations (markers) – subtle blue
    location_description: "",
    location_url: "",
    location_color: "#1d4ed8",
    location_opacity: 0.9,
    location_hover_opacity: 1,
    location_size: 18,
    location_type: "circle",
    location_image_source: "default",
    location_border_color: "#e5f0ff",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    // Labels
    label_color: "#ffffff", // text color = white
    label_hover_color: "#e5f0ff", // lighter blue on hover
    label_size: 12,
    label_font:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    // Zoom & animation
    zoom: "no",
    manual_zoom: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    zoom_out_incrementally: "yes",

    // Regions
    region_opacity: 1,
    region_hover_opacity: 0.7,

    // Popup styling
    popup_color: "#1d4ed8", // blue background
    popup_opacity: 0.95,
    popup_shadow: 1,
    popup_corners: 6,
    popup_font:
      "12px/1.5 system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    popup_nocss: "no",
    link_text: "Know more",

    // Misc
    back_image: "no",
    initial_back: "no",
    url_new_tab: "yes",
    images_directory: "default",
    fade_time: 0.1,
  },

  state_specific: {
    // keep your state_specific block exactly as you have it...
    INAN: {
      name: "Andaman and Nicobar",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INAP: {
      name: "Andhra Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INAR: {
      name: "Arunachal Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INAS: {
      name: "Assam",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INBR: {
      name: "Bihar",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INCH: {
      name: "Chandigarh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INCT: {
      name: "Chhattisgarh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INDL: {
      name: "Delhi",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INGA: {
      name: "Goa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INGJ: {
      name: "Gujarat",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INHP: {
      name: "Himachal Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INHR: {
      name: "Haryana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INJH: {
      name: "Jharkhand",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INJK: {
      name: "Jammu and Kashmir",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INKA: {
      name: "Karnataka",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INKL: {
      name: "Kerala",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INLA: {
      name: "Ladakh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INLD: {
      name: "Lakshadweep",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INMH: {
      name: "Maharashtra",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INML: {
      name: "Meghalaya",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INMN: {
      name: "Manipur",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INMP: {
      name: "Madhya Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INMZ: {
      name: "Mizoram",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INNL: {
      name: "Nagaland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INOR: {
      name: "Orissa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INPB: {
      name: "Punjab",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INPY: {
      name: "Puducherry",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INRJ: {
      name: "Rajasthan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INSK: {
      name: "Sikkim",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INTG: {
      name: "Telangana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INTN: {
      name: "Tamil Nadu",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INTR: {
      name: "Tripura",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INUP: {
      name: "Uttar Pradesh",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INUT: {
      name: "Uttaranchal",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
    INWB: {
      name: "West Bengal",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
    },
  },

  locations: {
    0: {
      name: "CSIR–CGCRI, Kolkata",
      lat: 22.5,
      lng: 88.4,
      description: "TOCIC – CSIR–CGCRI, Kolkata (West Bengal)",
      url: "https://www.cgcri.res.in/wp-content/uploads/2022/tocic1.pdf",
    },
    1: {
      name: "CSIR–CMERI, Durgapur",
      lat: 23.55,
      lng: 87.32,
      description: "TOCIC – CSIR–CMERI, Durgapur (West Bengal)",
      url: "https://www.cgcri.res.in/wp-content/uploads/2022/tocic1.pdf",
    },
    2: {
      name: "CSIR–NEIST, Jorhat",
      lat: 26.75,
      lng: 94.22,
      description: "TOCIC – CSIR–NEIST, Jorhat (Assam)",
      url: "https://neist.res.in/socialimpact.php",
    },
    3: {
      name: "GSBTM, Gandhinagar",
      lat: 23.22,
      lng: 72.65,
      description:
        "Gujarat State Biotechnology Mission (GSBTM), Gandhinagar (Gujarat)",
      url: "https://btm.gujarat.gov.in/Portal/Document/1_180_1_PRISMSchemes2017-2020.pdf",
    },
    4: {
      name: "IIT Kanpur",
      lat: 26.51,
      lng: 80.23,
      description:
        "Indian Institute of Technology (IIT) Kanpur – TOCIC (Uttar Pradesh)",
      url: "https://siicincubator.com/programs/programs_dsir_prism.php",
    },
    5: {
      name: "SPMVV, Tirupati",
      lat: 13.63,
      lng: 79.42,
      description:
        "Sri Padmavati Mahila Visvavidyalayam (SPMVV), Tirupati (Andhra Pradesh)",
      url: "https://www.spmvv.ac.in/incubators/tocic/",
    },
    6: {
      name: "CSIR–NAL, Bengaluru",
      lat: 12.97,
      lng: 77.59,
      description:
        "CSIR–National Aerospace Laboratories (NAL), Bengaluru (Karnataka)",
      url: "https://www.tocic-nal.org/funding-schemes",
    },
    7: {
      name: "CSIR–CSIO, Chandigarh",
      lat: 30.74,
      lng: 76.79,
      description:
        "CSIR–Central Scientific Instruments Organisation (CSIO), Chandigarh",
      url: "https://www.csio.res.in/CommonNew.php?ds=306&page=1",
    },
    8: {
      name: "CTAE, Udaipur",
      lat: 24.58,
      lng: 73.68,
      description:
        "College of Technology and Engineering (CTAE), Udaipur (Rajasthan)",
      url: "https://www.ctae.ac.in/singlePage.php?id=21&type=SP",
    },
    9: {
      name: "IIT Guwahati",
      lat: 26.19,
      lng: 91.69,
      description:
        "Indian Institute of Technology (IIT) Guwahati – TOCIC (Assam)",
      url: "https://www.iitg.ac.in/tocic/",
    },
    10: {
      name: "IIT Kharagpur",
      lat: 22.34,
      lng: 87.31,
      description:
        "Indian Institute of Technology (IIT) Kharagpur – TOCIC (West Bengal)",
      url: "https://respark.iitkgp.ac.in/incubation-hub.html",
    },
    11: {
      name: "University of Madras, Chennai",
      lat: 13.08,
      lng: 80.27,
      description: "University of Madras – TOCIC (Tamil Nadu)",
      url: "https://www.unom.ac.in/index.php?route=miscelleneous/tbi",
    },
  },

  labels: {
    // keep your labels block as-is
    INAN: { name: "Andaman and Nicobar", parent_id: "INAN" },
    INAP: { name: "Andhra Pradesh", parent_id: "INAP" },
    INAR: { name: "Arunachal Pradesh", parent_id: "INAR" },
    INAS: { name: "Assam", parent_id: "INAS" },
    INBR: { name: "Bihar", parent_id: "INBR" },
    INCH: { name: "Chandigarh", parent_id: "INCH" },
    INCT: { name: "Chhattisgarh", parent_id: "INCT" },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      parent_id: "INDH",
    },
    INDL: { name: "Delhi", parent_id: "INDL" },
    INGA: { name: "Goa", parent_id: "INGA" },
    INGJ: { name: "Gujarat", parent_id: "INGJ" },
    INHP: { name: "Himachal Pradesh", parent_id: "INHP" },
    INHR: { name: "Haryana", parent_id: "INHR" },
    INJH: { name: "Jharkhand", parent_id: "INJH" },
    INJK: { name: "Jammu and Kashmir", parent_id: "INJK" },
    INKA: { name: "Karnataka", parent_id: "INKA" },
    INKL: { name: "Kerala", parent_id: "INKL" },
    INLA: { name: "Ladakh", parent_id: "INLA" },
    INLD: { name: "Lakshadweep", parent_id: "INLD" },
    INMH: { name: "Maharashtra", parent_id: "INMH" },
    INML: { name: "Meghalaya", parent_id: "INML" },
    INMN: { name: "Manipur", parent_id: "INMN" },
    INMP: { name: "Madhya Pradesh", parent_id: "INMP" },
    INMZ: { name: "Mizoram", parent_id: "INMZ" },
    INNL: { name: "Nagaland", parent_id: "INNL" },
    INOR: { name: "Orissa", parent_id: "INOR" },
    INPB: { name: "Punjab", parent_id: "INPB" },
    INPY: { name: "Puducherry", parent_id: "INPY" },
    INRJ: { name: "Rajasthan", parent_id: "INRJ" },
    INSK: { name: "Sikkim", parent_id: "INSK" },
    INTG: { name: "Telangana", parent_id: "INTG" },
    INTN: { name: "Tamil Nadu", parent_id: "INTN" },
    INTR: { name: "Tripura", parent_id: "INTR" },
    INUP: { name: "Uttar Pradesh", parent_id: "INUP" },
    INUT: { name: "Uttaranchal", parent_id: "INUT" },
    INWB: { name: "West Bengal", parent_id: "INWB" },
  },
};
