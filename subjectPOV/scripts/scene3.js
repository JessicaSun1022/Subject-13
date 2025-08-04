document.addEventListener('DOMContentLoaded', () =>{
    if(
        localStorage.getItem('ending1') == 'true' &&
        localStorage.getItem('ending2') == 'true'
    )
    {
        document.getElementById('secret-ending').classList.remove('hidden');
    }
});