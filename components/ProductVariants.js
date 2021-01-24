app.component("product-variants", {
  props: {
    productIndex: {
      type: Number,
      isrequired: true,
    },
    variants: {
      type: Array,
      isrequired: true,
    },
  },

  template:
    /*html*/
    `<div class="product-variants">
        <ul>
            <li
                v-for="(variant, variantIndex) in variants"
                :key="variant"
                @mouseover="selectVariant(productIndex, variantIndex)"
                class="color-circle"
                :style="{backgroundColor: variant.color}"
            ></li>
        </ul>
    </div>`,

  methods: {
    selectVariant(productIndex, variantIndex) {
      this.$emit("select-variant", productIndex, variantIndex);
    },
  },
});
