INSERT INTO users(
    auth_id,
    first_name,
    last_name,
    picture_url
)
VALUES(
    $3,
    $2,
    $1,
    $4
)
returning *