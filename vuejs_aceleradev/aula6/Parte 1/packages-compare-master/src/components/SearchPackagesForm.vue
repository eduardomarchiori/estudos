<template>
  <div class="field has-addons is-fullwidth ">
    <div class="control is-expanded" :class="{ isEmptySuggestion: isLoading }">
      <div
        class="dropdown is-fullwidth "
        :class="{ 'is-active': !isEmptySuggestion }"
      >
        <input
          type="text"
          class="input is-large is-fullwidth"
          :class="{ 'is-danger': $v.$invalid }"
          @keyup="onFilterSuggestions"
          v-model="filter"
        />
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content is-fullwidth">
            <a
              href="#"
              v-for="(packageValue, idx) in packagesSuggestions"
              :key="idx"
              class="dropdown-item"
              @click="
                onClickSuggestion(
                  packageValue.package.name,
                  packageValue.package.version
                )
              "
              >{{ packageValue.package.name }}@{{
                packageValue.package.version
              }}</a
            >
          </div>
        </div>
      </div>

      <p
        class="help is-danger"
        v-for="(errorMessage, idx) in filterErrorMessages"
        :key="idx"
      >
        {{ errorMessage }}
      </p>
    </div>

    <div class="control">
      <a class="button is-large" @click="onFilterSuggestions">
        Search
      </a>
    </div>
  </div>
</template>

<script>
import { maxLength } from "vuelidate/lib/validators";
import { searchPackages, getPackagesInfo } from "@/services/packages";
import { getValidatorMessages } from "@/utils/validations.js";
import debounce from "lodash/debounce";

export default {
  name: "App",
  data() {
    return {
      packagesSuggestions: [],
      filter: "",
      isLoading: false
    };
  },
  validations: {
    filter: {
      noWhiteSpaces: value => !value.includes(" "),
      maxLength: maxLength(256)
    }
  },
  computed: {
    isEmptySuggestion() {
      return this.packagesSuggestions.length === 0;
    },
    filterErrorMessages() {
      return getValidatorMessages(this.$v.filter);
    }
  },
  methods: {
    onFilterSuggestions: debounce(function() {
      this.isLoading = true;
      if (this.filter && !this.$v.$invalid) {
        searchPackages(this.filter)
          .then(response => {
            this.packagesSuggestions = response.data;
          })
          .finally(() => {
            this.isLoading = false;
          });
      } else {
        this.isLoading = "";
        this.packagesSuggestions = [];
      }
    }, 300),
    onClickSuggestion: function(nameSuggestion, versionSuggestion) {
      getPackagesInfo(nameSuggestion, versionSuggestion).then(({ data }) => {
        this.$emit("found", data);
        this.filter = "";
        this.packagesSuggestions = [];
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.is-fullwidth {
  width: 100vh;
}
</style>
