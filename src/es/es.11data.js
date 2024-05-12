module.exports = {
  lang: 'es',
  permalink: data => {
    //Slug override for localized URL slugs
    if (data.slugOveride) {
        return `/${data.lang}/${this.slugify(data.slugOverride)}/`;
    }
  }  
};