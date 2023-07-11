const codeSnippet = () => {
    return (
        <>
        {`# BEGIN WordPress
# The directives (lines) between "BEGIN WordPress" and "END WordPress" are
# dynamically generated, and should only be modified via WordPress filters.
# Any changes to the directives between these markers will be overwritten.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /capstone/canadian-climate-conference/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /capstone/canadian-climate-conference/index.php [L]
</IfModule>

# END WordPress

SetEnv GOOGLE_MAPS_API_KEY "abcdefghijklmnopqrstuvwxyz123456789"
SetEnv MAILCHIMP_API_KEY "abcdefghijklmnopqrstuvwxyz123456789"`}
        </>
    );
}

export default codeSnippet;